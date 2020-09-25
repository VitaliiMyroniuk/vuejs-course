import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://react-cdp-api.herokuapp.com/',
  timeout: 5000
})

export default {
  getMovies: searchParams => {
    const params = Object.keys(searchParams)
      .map(key => key + '=' + searchParams[key])
      .join('&')
    return axiosClient.get('movies?' + params)
  },

  getMovieById: id => {
    return axiosClient.get('movies/' + id)
  }
}
