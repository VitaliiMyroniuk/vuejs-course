import SearchResultBody from '../components/SearchResultBody.vue'
import movies from '../assets/movies.json'

export default {
  title: 'Components/SearchResultBody',
  component: SearchResultBody
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchResultBody },
  template: '<search-result-body style="background-color: #232323" :movies="movies"/>'
})

export const Default = Template.bind({})
Default.args = {
  movies: movies
}

export const EmptyResult = Template.bind({})
EmptyResult.args = {
  movies: []
}
