module.exports = {
  rootDir: __dirname,
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
