const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDIr: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  build: {
    filenames: {
      app: '[name].js',
      chunk: '[name].js'
    }
  },
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') }
  ]
}
