<template>
  <div>
    <h1 :class="logoStyle">
      Nuxt
      <span :class="primaryStyle">
        JS
      </span>
    </h1>
    <h1>
      The
      <span :class="primaryStyle">
        Vue.js
      </span>
      Framework
    </h1>
  </div>
</template>

<script>
import { primaryStyle, logoStyle } from '~/assets/styles'

export default {
  computed: {
    primaryStyle: () => primaryStyle,
    logoStyle: () => logoStyle
  }
}
</script>
