import MovieDetails from '../components/MovieDetails.vue'
import movies from '../assets/movies.json'

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MovieDetails },
  template: '<movie-details :movie="movie"/>'
})

export const Default = Template.bind({})
Default.args = {
  movie: movies[1]
}
