import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  it('renders title "Sudoku"', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Sudoku')
  })
})
