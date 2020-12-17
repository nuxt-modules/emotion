import { hydrate } from '@emotion/css'

const ids = window.$emotionSSRIds

if (ids) {
  hydrate(ids)
}
