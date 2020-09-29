<template>
  <div class="row justify-content-md-center align-items-center search-by">
    <div class="col col-lg-2">
      <h6 class="font-weight-light text-uppercase text-light">Search by</h6>
    </div>
    <div class="col col-lg-8">
      <button-group first-button-name="Title" second-button-name="Genre"
                    @firstButtonClick="searchByTitle" @secondButtonClick="searchByGenre"/>
    </div>
  </div>
</template>

<script>
import ButtonGroup from './ButtonGroup.vue'

export default {
  name: 'SearchOptions',
  components: {
    ButtonGroup
  },
  methods: {
    searchByTitle () {
      this.$store.commit('setSearchBy', 'title')
    },
    searchByGenre () {
      this.$store.commit('setSearchBy', 'genres')
    }
  }
}
</script>

<style scoped>
.row {
  padding-bottom: 30px;
}

h6 {
  margin-top: 3px;
  font-size: 1.25rem;
}
</style>
