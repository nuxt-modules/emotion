import { setupTest, get } from '@nuxt/test-utils'

const withoutSSRId = str => str.replace(/data-vue-ssr-id="[^"]+"/g, 'data-vue-ssr-id')

describe('module', () => {
  setupTest({
    testDir: __dirname,
    fixture: '../example',
    server: true
  })

  test('/ (pink)', async () => {
    const html = await get('/').then(r => r.body)
    expect(withoutSSRId(html)).toMatchSnapshot()
  })

  test('/ (normal)', async () => {
    const html = await get('/normal').then(r => r.body)
    expect(withoutSSRId(html)).toMatchSnapshot()
  })
})
