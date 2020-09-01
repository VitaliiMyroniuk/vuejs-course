<template>
  <div class="container">
    <search-result-header :genres="genres" :count="movies.length" @sortMovies="sortMovies"/>
    <search-result-body :movies="movies"/>
  </div>
</template>

<script>
import SearchResultHeader from '../components/SearchResultHeader.vue'
import SearchResultBody from '../components/SearchResultBody.vue'

export default {
  name: 'SearchResultContainer',
  components: {
    SearchResultHeader,
    SearchResultBody
  },
  props: {
    genres: Array,
    movies: Array
  },
  methods: {
    sortMovies (option) {
      if (option === 'release_date') {
        this.movies = this.movies.sort((a, b) => b.release_date.localeCompare(a.release_date))
      } else {
        this.movies = this.movies.sort((a, b) => b.vote_average - a.vote_average)
      }
    }
  }
}
</script>
