export default {
  createRequire: process.env.NODE_ENV === 'test' ? 'native' : 'jiti',
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
    '../src/index.ts'
  ]
}
