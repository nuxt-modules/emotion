import path from 'path'
import { renderStylesToString, extractCritical } from 'emotion-server'

module.exports = function (moduleOptions) {
  const defaults = {
    ssr: 'critical',
    babel: {
      inline: true,
      sourceMap: this.options.dev,
      autoLabel: this.options.dev
    }
  }

  const options = {
    ...defaults,
    ...moduleOptions,
    ...this.options.emotion
  }

  if (options.babel) {
    babel.call(this, options)
  }

  const functionMap = new Map([
    ['render', ssr],
    ['critical', critical]
  ])

  const renderFn = functionMap.get(options.ssr)

  if (typeof renderFn === 'undefined') {
    throw Error(`Invalid value "${options.ssr}" for \`emotion.ssr\``)
  }

  renderFn.call(this, options)
}

function babel(options) {
  this.nuxt.hook('build:before', () => {
    const { babel } = this.options.build
    if (!babel.plugins) {
      babel.plugins = []
    }
    babel.plugins.unshift(['emotion', {
      inline: true,
      ...options.babel
    }])
  })
}

function critical(options) {
  this.nuxt.hook('build:before', () => {
    if (this.options.mode !== 'spa') {
      this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'emotion.js',
        ssr: false,
        options
      })
    }
  })

  this.nuxt.hook('vue-renderer:ssr:templateParams', (params) => {
    const { ids, css } = extractCritical(params.APP)
    params.HEAD += `<style>${css}</style>`
    params.HEAD += `<script>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`
  })
}

function ssr(options) {
  this.nuxt.hook('vue-renderer:ssr:templateParams', (params) => {
    params.APP = renderStylesToString(params.APP)
  })
}

module.exports.meta = require('../package.json')
