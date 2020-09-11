import Vue from 'vue'
import Vuex from 'vuex'
import movies from '@/assets/movies.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: movies,
    searchOption: 'title',
    inputValue: '',
    sortOption: 'release_date'
  },
  getters: {
    getMovies: state => {
      return state.movies.sort((a, b) => state.sortOption === 'release_date'
        ? b.release_date.localeCompare(a.release_date)
        : b.vote_average - a.vote_average
      )
    },
    getMovieById: state => id => {
      return state.movies.find(movie => `${movie.id}` === id)
    },
    getSimilarMoviesById: (state, getters) => id => {
      const genres = getters.getMovieById(id).genres
      return state.movies.filter(movie => movie.genres
        .filter(genre => genres.includes(genre))
        .length
      )
    }
  },
  mutations: {
    RESET_STATE (state) {
      state.movies = movies
      state.searchOption = 'title'
      state.inputValue = ''
      state.sortOption = 'release_date'
    },

    SEARCH_MOVIES (state) {
      if (state.inputValue && state.searchOption === 'title') {
        state.movies = movies.filter(movie => movie.title.toLowerCase().includes(state.inputValue.toLowerCase()))
      } else if (state.inputValue) {
        state.movies = movies.filter(movie => movie.genres
          .filter(genre => genre.toLowerCase().includes(state.inputValue.toLowerCase()))
          .length)
      } else {
        state.movies = movies
      }
    },

    UPDATE_INPUT_VALUE (state, inputValue) {
      state.inputValue = inputValue
    },

    UPDATE_SEARCH_OPTION (state, searchOption) {
      state.searchOption = searchOption
    },

    UPDATE_SORT_OPTION (state, sortOption) {
      state.sortOption = sortOption
    }
  },
  actions: {},
  modules: {}
})
