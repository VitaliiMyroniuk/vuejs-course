import { action } from '@storybook/addon-actions'
import SearchBar from '../components/SearchBar.vue'

export default {
  title: 'Components/SearchBar',
  component: SearchBar
}

export const Default = () => ({
  components: { SearchBar },
  template: '<search-bar @searchMovies="searchMovies"/>',
  methods: {
    searchMovies: action('searchMovies')
  }
})
