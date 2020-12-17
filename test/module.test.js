import { setupTest, get } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    server: true
  })

  test('/ (pink)', async () => {
    const html = await get('/').then(r => r.body)
    expect(html).toMatchSnapshot()
  })

  test('/ (normal)', async () => {
    const html = await get('/normal').then(r => r.body)
    expect(html).toMatchSnapshot()
  })
})
