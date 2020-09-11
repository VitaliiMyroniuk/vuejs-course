<template>
  <div class="row justify-content-md-center search-box">
    <div class="col col-lg-7">
      <input type="text"
             class="form-control text-light"
             v-model="inputValue"
             @keyup.enter="searchMovies"
             placeholder="Search">
    </div>
    <div class="col col-lg-3">
      <base-button class="text-uppercase btn-danger btn-block" @click="searchMovies">Search</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'SearchBar',
  components: {
    BaseButton
  },
  computed: {
    inputValue: {
      set (value) {
        this.$store.commit('UPDATE_INPUT_VALUE', value.trim())
      },
      get () {
        return this.$store.state.inputValue
      }
    }
  },
  methods: {
    searchMovies () {
      this.$store.commit('SEARCH_MOVIES')
    }
  }
}
</script>

<style scoped>
.row {
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.form-control {
  background-color: rgba(35, 35, 35, 0.8);
  border: 1px solid #232323;
  line-height: 2;
}

.form-control:hover, .form-control:active, .form-control:valid {
  background-color: rgba(35, 35, 35, 0.8);
  border: 1px solid #232323;
}

.search-box .btn {
  line-height: 2;
}

.search-by .btn, .filter-header .btn {
  line-height: 1;
}
</style>
