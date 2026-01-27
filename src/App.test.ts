import { mount } from '@vue/test-utils'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router/router'
import { createPinia } from 'pinia'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()

describe('App.vue', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders the splash screen on laod', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    })
    expect(wrapper.text()).toContain('Welcome to Sudoku+')
  })
})
