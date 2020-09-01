import { action } from '@storybook/addon-actions'
import BaseButton from '../components/BaseButton.vue'

export default {
  title: 'Base Elements/BaseButton',
  component: BaseButton
}

export const Default = () => ({
  components: { BaseButton },
  template: '<base-button @click="onClick">Default</base-button>',
  methods: {
    onClick: action('click')
  }
})
