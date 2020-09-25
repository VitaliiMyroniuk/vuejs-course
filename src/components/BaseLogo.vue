<template>
  <img @click="onClick" src="../assets/logo.png" class="logo" alt="Netflix Roulette logo">
</template>

<script>
export default {
  name: 'BaseLogo',
  methods: {
    async onClick () {
      this.$store.commit('initSearchParams')
      await this.$store.dispatch('loadMovies')
      await this.$router.push('/')
    }
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
