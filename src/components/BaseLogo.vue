<template>
  <img @click="onClick" src="../assets/logo.png" class="logo" alt="Netflix Roulette logo">
</template>

<script>
export default {
  name: 'BaseLogo',
  methods: {
    onClick () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
