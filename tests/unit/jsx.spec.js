import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import widgetFormJSX from '@/pages/jsxView/WidgetFormJSX.vue'

describe('widgetFormJSX.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(widgetFormJSX)
    expect(wrapper.classes('main-form')).to.be.true
  })
})
