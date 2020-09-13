<template>
  <div class="container">
    <search-result-header :genres="genres" :count="movies.length"/>
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
  }
}
</script>
