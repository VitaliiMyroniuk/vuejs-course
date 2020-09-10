<template>
  <div class="app-body">
    <search-panel @searchMovies="searchMovies"/>
    <search-result-container :movies="movies"/>
    <base-footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchPanel from '../components/SearchPanel.vue'
import SearchResultContainer from '../components/SearchResultContainer.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    SearchPanel,
    SearchResultContainer,
    BaseFooter: Footer
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    searchMovies (searchOptions) {
      // if (searchOptions.inputValue && searchOptions.isTitleSelected) {
      //   this.movies = movies.filter(movie => movie.title.toLowerCase().includes(searchOptions.inputValue))
      // } else if (searchOptions.inputValue) {
      //   this.movies = movies.filter(movie => movie.genres
      //     .filter(genre => genre.toLowerCase().includes(searchOptions.inputValue))
      //     .length
      //   )
      // } else {
      //   this.movies = movies
      // }
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
