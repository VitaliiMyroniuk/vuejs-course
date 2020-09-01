import MovieItem from '../components/MovieItem.vue'
import movies from '../assets/movies.json'

export default {
  title: 'Components/MovieItem',
  component: MovieItem
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MovieItem },
  template: '<movie-item :movie="movie"/>'
})

export const Movie = Template.bind({})
Movie.args = {
  movie: movies[1]
}
