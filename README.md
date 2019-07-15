<p align="center" style="color: #343a40">
  <img src="https://cdn.rawgit.com/tkh44/emotion/master/emotion.png" alt="emotion" height="150" width="150">
  <h1 align="center">@nuxtjs/emotion</h1>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@nuxtjs/emotion"><img src="https://img.shields.io/npm/v/@nuxtjs/emotion/latest.svg?style=flat-square" alt="npm version"></a>
  <a href="https://npmjs.com/package/@nuxtjs/emotion"><img src="https://img.shields.io/npm/dt/@nuxtjs/emotion.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://circleci.com/gh/nuxt-community/emotion-module"><img src="https://img.shields.io/circleci/project/github/nuxt-community/emotion-module.svg?style=flat-square" alt="circle ci"></a>
  <a href="https://codecov.io/gh/nuxt-community/emotion-module"><img src="https://img.shields.io/codecov/c/github/nuxt-community/emotion-module.svg?style=flat-square" alt="coverage"></a>
  <a href="https://www.npmjs.com/package/@nuxtjs/emotion"><img src="https://img.shields.io/npm/l/@nuxtjs/emotion.svg?style=flat-square" alt="License"></a>
</p>

> [Emotion](https://emotion.sh) module for [Nuxt.js](https://nuxtjs.org)

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

**IMPORTANT NOTE:** This module requires new hooks that works with nuxt `2.5.0` or `nuxt-edge` only.

1. Add `@nuxtjs/emotion` dependency to your project

```bash
yarn add @nuxtjs/emotion # or npm install @nuxtjs/emotion
```

2. Add `@nuxtjs/emotion` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/emotion',

    // With options
    ['@nuxtjs/emotion', { /* module options */ }]
  ]
}
```

### Using top level options

```js
{
  modules: [
    '@nuxtjs/emotion'
  ],
  emotion: {
    /* module options */
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

Copyright (c) Nuxt Community
