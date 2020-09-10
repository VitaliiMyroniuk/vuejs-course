<template>
  <div class="app-body">
    <movie-details :movie="movie"/>
    <search-result-container :genres="movie.genres" :movies="similarMovies"/>
    <base-footer/>
  </div>
</template>

<script>
import MovieDetails from '../components/MovieDetails.vue'
import SearchResultContainer from '../components/SearchResultContainer.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'MovieDetailsPage',
  components: {
    MovieDetails,
    SearchResultContainer,
    BaseFooter: Footer
  },
  computed: {
    movie () {
      const id = this.$route.params.id
      return this.$store.getters.getMovieById(id)
    },
    similarMovies () {
      const id = this.$route.params.id
      return this.$store.getters.getSimilarMoviesById(id)
    }
  }
}
</script>

<style scoped>
.app-body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  display: block;
}
</style>
