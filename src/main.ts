import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './store/pinia'
import { router } from './router/router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(router)
app.use(pinia)
app.mount('#app')
