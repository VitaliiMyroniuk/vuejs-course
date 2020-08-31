import Footer from '../components/Footer.vue'

export default {
  title: 'Components/Footer',
  component: Footer
}

export const Default = () => ({
  components: {
    BaseFooter: Footer
  },
  template: '<base-footer/>'
})
