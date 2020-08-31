<template>
  <section>
    <div class="row">
      <div v-if="movies.length" class="d-flex align-content-stretch flex-wrap movies justify-content-around">
        <movie-item v-for="movie in movies" :key="movie.id" :movie="movie"/>
      </div>
      <div v-else class="col text-center no-found">
        <h2 class="text-light font-weight-light">
          No films found
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import MovieItem from './MovieItem.vue'

export default {
  name: 'SearchResultBody',
  components: {
    MovieItem
  },
  props: {
    movies: Array
  }
}
</script>

<style scoped>
section {
  padding-bottom: 35px;
  display: flex;
  justify-content: center;
}

.no-found {
  padding: 20px;
  margin: 150px 0;
}
</style>
