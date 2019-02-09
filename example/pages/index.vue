<template>
  <div :class="pinkStyle">
    <Logo />
    <router-link to="/normal">
      Go Normal
    </router-link>
  </div>
</template>

<script>
import Logo from '~/components/logo'
import { pinkStyle } from '~/assets/styles'

export default {
  components: {
    Logo
  },
  computed: {
    pinkStyle: () => pinkStyle
  }
}
</script>
