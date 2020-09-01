import SearchResultContainer from '../components/SearchResultContainer.vue'
import movies from '../assets/movies.json'

export default {
  title: 'Components/SearchResultContainer',
  component: SearchResultContainer
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchResultContainer },
  template: '<search-result-container style="background-color: #232323" :movies="movies"/>'
})

export const Default = Template.bind({})
Default.args = {
  movies: movies
}
