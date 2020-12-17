const { resolve } = require('path')
const { renderStylesToString, extractCritical } = require('@emotion/server')
const logger = require('./logger')

module.exports = function (moduleOptions) {
  const defaults = {
    ssr: 'critical',
    babel: {
      inline: true,
      sourceMap: this.options.dev
    }
  }

  const options = {
    ...defaults,
    ...this.options.emotion,
    ...moduleOptions
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
    logger.error(`Invalid value "${options.ssr}" for \`emotion.ssr\``)
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
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'emotion.js',
      ssr: false,
      options
    })
  })

  this.nuxt.hook('vue-renderer:ssr:templateParams', (params) => {
    const { ids, css } = extractCritical(params.APP)
    params.HEAD += `<style data-nuxt-emotion="true">${css}</style>`
    params.HEAD += `<script data-nuxt-emotion-ids>window.$emotionSSRIds = ${JSON.stringify(ids)}</script>`
  })
}

function ssr (options) {
  this.nuxt.hook('vue-renderer:ssr:templateParams', (params) => {
    params.APP = renderStylesToString(params.APP)
  })
}
