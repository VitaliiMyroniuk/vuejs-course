import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton.vue', () => {
  it('should show correct button name', () => {
    const buttonName = 'Default'
    const wrapper = shallowMount(BaseButton, {
      slots: {
        default: buttonName
      }
    })
    expect(wrapper.text()).toMatch(buttonName)
  })
})
