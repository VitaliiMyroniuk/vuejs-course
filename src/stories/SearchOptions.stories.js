import { action } from '@storybook/addon-actions'
import SearchOptions from '../components/SearchOptions.vue'

export default {
  title: 'Components/SearchOptions',
  component: SearchOptions
}

export const Default = () => ({
  components: { SearchOptions },
  template: '<search-options style="background-color: grey" @updateSearchOptions="updateSearchOptions"/>',
  methods: {
    updateSearchOptions: action('updateSearchOptions')
  }
})
