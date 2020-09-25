<template>
  <div class="app-body">
    <movie-details :movie="movie"/>
    <search-result-container :genres="movie.genres" :movies="movies"/>
    <base-footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState({
      movie: 'movie',
      movies: 'movies'
    })
  },
  async mounted () {
    const id = this.$route.params.id
    await this.$store.dispatch('loadMovieById', id)
    this.$store.commit('initSearchParams')
    await this.$store.dispatch('loadMovies')
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
