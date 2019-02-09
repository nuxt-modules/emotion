<p align="center" style="color: #343a40">
  <img src="https://cdn.rawgit.com/tkh44/emotion/master/emotion.png" alt="emotion" height="150" width="150">
  <h1 align="center">Emotion Module</h1>
</p>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

[Emotion](https://emotion.sh) support for Nuxt.js

## Features

- Server Side Rendering (**SSR**)
- Critical Path CSS with Hydration
- Hot Reloads (**HMR**)
- Style inlining
- Minification
- Dead Code Elimination
- Source Maps
- Contextual Class Names

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

**IMPORTANT NOTE:** This module requres new hooks that works with nuxt `2.5.0` or `nuxt-edge` only.

- Add `@nuxtjs/emotion` dependency using yarn or npm to your project
window.$emotionSSRIds section of `nuxt.config.js`
window.$emotionSSRIds
```js
{
  modules: [
    '@nuxtjs/emotion'
 ],
 emotion: {

 }
}
```

## Options

### `ssr`

- Default: `'critical'`

Can be `'critical'` or `'render'` or `false`.

In the `critical` mode, module automatically injects `window.$emotionSSRIds` for hydration.

### `babel`

- Default: `{ inline: true }`

Options for [babel-plugin-emotion](https://emotion.sh/docs/babel-plugin-emotion) integration.

Can be disabled by setting to `false`.

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) pooya parsa <pooya@pi0.ir>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/emotion.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/emotion
[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/emotion/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/emotion
[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/emotion-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/emotion-module
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/emotion-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/emotion-module
[david-dm-src]: https://david-dm.org/nuxt-community/emotion-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/emotion-module
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
