import { resolve } from 'path'
import { renderStylesToString, extractCritical } from '@emotion/server'


export default function (moduleOptions) {
  const defaults = {
    ssr: 'critical',
    babel: {
      inline: true,
      sourceMap: this.options.dev
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

  if (!options.ssr) {
    return
  }

  const functionMap = {
    render: ssr,
    critical
  }

  const renderFn = functionMap[options.ssr]

  if (typeof renderFn === 'undefined') {
    console.error(`[emotion] Invalid value "${options.ssr}" for \`emotion.ssr\``)
    return
  }

  renderFn.call(this, options)
}

function babel (options) {
  this.nuxt.hook('build:before', () => {
    const { babel } = this.options.build
    if (!babel.plugins) {
      babel.plugins = []
    }

    babel.plugins.unshift(['@emotion', {
      inline: true,
      ...options.babel
    }])
  })
}

function critical (options) {
  this.nuxt.hook('build:before', () => {
    if (this.options.mode === 'spa') {
      return
    }

    this.addPlugin({
      src: resolve(__dirname, '../templates/emotion.js'),
      fileName: 'emotion.js',
      ssr: false,
      options
    })
  })

  this.nuxt.hook('vue-renderer:ssr:templateParams', (params) => {
    const { ids, css } = extractCritical(params.APP)
    params.HEAD += `<style>${css}</style>`
    params.HEAD += `<script>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`
  })
}

function ssr (options) {
  this.nuxt.hook('vue-renderer:ssr:templateParams', (params) => {
    params.APP = renderStylesToString(params.APP)
  })
}

module.exports.meta = require('../package.json')
