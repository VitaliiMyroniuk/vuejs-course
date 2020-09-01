import BaseLogo from '../components/BaseLogo.vue'

export default {
  title: 'Base Elements/BaseLogo',
  component: BaseLogo
}

export const NetflixRoulette = () => ({
  components: { BaseLogo },
  template: '<base-logo style="height: 25px; margin: 20px;"/>'
})
