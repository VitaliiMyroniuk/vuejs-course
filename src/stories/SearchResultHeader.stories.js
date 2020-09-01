import SearchResultHeader from '../components/SearchResultHeader.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/SearchResultHeader',
  component: SearchResultHeader
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchResultHeader },
  template: '<search-result-header :genres="genres" :count="count" @sortMovies="sortMovies"/>',
  methods: {
    sortMovies: action('sortMovies')
  }
})

export const HeaderWithSearchOptions = Template.bind({})
HeaderWithSearchOptions.args = {
  count: 0
}

export const HeaderWithCount = Template.bind({})
HeaderWithCount.args = {
  count: 10
}

export const HeaderWithGenres = Template.bind({})
HeaderWithGenres.args = {
  genres: ['Action', 'Fantasy']
}
