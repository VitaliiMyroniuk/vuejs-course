import Vue from 'vue'
import Vuex from 'vuex'
import movies from '@/assets/movies.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: movies
  },
  getters: {
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
  mutations: {},
  actions: {},
  modules: {}
})
