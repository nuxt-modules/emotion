const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('module', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, '../../example', { dev: false }))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('/ (pink)', async () => {
    const html = await get('/')
    expect(html).toMatchSnapshot()
  })

  test('/ (normal)', async () => {
    const html = await get('/normal')
    expect(html).toMatchSnapshot()
  })
})
