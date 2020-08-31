<template>
  <div class="row filter-header text-light">
    <div class="col col-lg-6">
      <h6 class="align-middle font-weight-bold" v-if="genres">Films by {{ genres.join(', ') }} genre</h6>
      <h6 class="align-middle font-weight-bold" v-else-if="count">{{ count }} movies found</h6>
    </div>
    <div v-if="showSortOptions" class="col col-lg-2 text-right">
      <h5 class="text-uppercase">sort by</h5>
    </div>
    <div v-if="showSortOptions" class="col col-lg-3">
      <button-group first-button-name="Release date" second-button-name="rating"
                    @firstButtonClick="sortByReleaseDate" @secondButtonClick="sortByRating"/>
    </div>
  </div>
</template>

<script>
import ButtonGroup from './ButtonGroup.vue'

export default {
  name: 'SearchResultHeader',
  components: {
    ButtonGroup
  },
  props: {
    count: Number,
    genres: Array
  },
  methods: {
    sortByReleaseDate () {
      this.$emit('sortMovies', 'release_date')
    },
    sortByRating () {
      this.$emit('sortMovies', 'rating')
    }
  },
  computed: {
    showSortOptions () {
      return this.genres === undefined
    }
  }
}
</script>

<style scoped>
.filter-header {
  background-color: #555555;
}

.filter-header .col {
  margin: 15px;
}

.filter-header .btn {
  line-height: 1;
}

.search-box .btn {
  line-height: 2;
}

h5, h6 {
  margin-top: 6px;
}
</style>
