<template>
  <div>
    <Logo />
    <router-link to="/">
      Go Pink
    </router-link>
  </div>
</template>

<script>
import Logo from '~/components/logo'

export default {
  components: {
    Logo
  }
}
</script>
