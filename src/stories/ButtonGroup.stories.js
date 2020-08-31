import { action } from '@storybook/addon-actions'
import ButtonGroup from '../components/ButtonGroup.vue'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonGroup },
  template: '<button-group ' +
    ':first-button-name="firstButtonName" :second-button-name="secondButtonName" ' +
    '@firstButtonClick="firstButtonClick" @secondButtonClick="secondButtonClick"/>',
  methods: {
    firstButtonClick: action('firstButtonClick'),
    secondButtonClick: action('secondButtonClick')
  }
})

export const SearchOptions = Template.bind({})
SearchOptions.args = {
  firstButtonName: 'Title',
  secondButtonName: 'Genre'
}

export const SortOptions = Template.bind({})
SortOptions.args = {
  firstButtonName: 'Release date',
  secondButtonName: 'rating'
}
