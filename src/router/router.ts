import PlayScreen from '@/components/screens/PlayScreen.vue'
import SplashScreen from '@/components/screens/SplashScreen.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: SplashScreen },
  { path: '/play', component: PlayScreen },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
