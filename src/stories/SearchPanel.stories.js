import { action } from '@storybook/addon-actions'
import SearchPanel from '../components/SearchPanel.vue'

export default {
  title: 'Components/SearchPanel',
  component: SearchPanel
}

export const Default = () => ({
  components: { SearchPanel },
  template: '<search-panel @searchMovies="searchMovies"/>',
  methods: {
    searchMovies: action('searchMovies')
  }
})
