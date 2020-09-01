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
import movies from '../assets/movies.json'

export default {
  name: 'MovieDetailsPage',
  components: {
    MovieDetails,
    SearchResultContainer,
    BaseFooter: Footer
  },
  computed: {
    movie () {
      return movies.find(movie => `${movie.id}` === this.$route.params.id)
    },
    similarMovies () {
      const genres = movies.find(movie => `${movie.id}` === this.$route.params.id).genres
      return movies.filter(movie => movie.genres
        .filter(genre => genres.includes(genre))
        .length
      )
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
