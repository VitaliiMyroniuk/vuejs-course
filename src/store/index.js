import Vue from 'vue'
import Vuex from 'vuex'
import movieClient from '../api/movieClient'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie: {},
    movies: [],
    searchParams: {}
  },

  mutations: {
    initSearchParams: (state) => {
      state.searchParams.sortBy = 'release_date'
      state.searchParams.sortOrder = 'desc'
      state.searchParams.search = ''
      state.searchParams.searchBy = 'title'
      state.searchParams.filter = ''
      state.searchParams.offset = 0
      state.searchParams.limit = 15
    },

    setMovie: (state, movie) => {
      state.movie = movie
    },

    setMovies: (state, movies) => {
      state.movies = movies
    },

    setSortBy: (state, sortBy) => {
      state.searchParams.sortBy = sortBy
    },

    setSortOrder: (state, sortOrder) => {
      state.searchParams.sortOrder = sortOrder
    },

    setSearchInput: (state, searchInput) => {
      state.searchParams.search = searchInput.trim()
    },

    setSearchBy: (state, searchBy) => {
      state.searchParams.searchBy = searchBy
    },

    setOffset: (state, offset) => {
      state.searchParams.offset = offset
    },

    setLimit: (state, limit) => {
      state.searchParams.limit = limit
    }
  },

  actions: {
    loadMovies: async context => {
      try {
        const searchParams = context.state.searchParams
        const searchResult = await movieClient.getMovies(searchParams)
        context.commit('setMovies', searchResult.data.data)
      } catch (err) {
        console.error(err)
      }
    },

    loadMovieById: async (context, id) => {
      try {
        const searchResult = await movieClient.getMovieById(id)
        context.commit('setMovie', searchResult.data)
      } catch (err) {
        console.error(err)
      }
    }
  },

  modules: {}
})
