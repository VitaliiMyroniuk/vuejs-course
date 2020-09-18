import LazyImage from '../components/LazyImage'
import timeFilter from '../filters/time'

export default {
  install: (Vue, options) => {
    Vue.component('LazyImage', LazyImage)
    Vue.filter('toMinutes', timeFilter.toMinutes)
    Vue.filter('toYears', timeFilter.toYears)
  }
}
