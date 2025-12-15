import GameBoard from '@/components/GameBoard.vue'
import SplashScreen from '@/components/SplashScreen.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: SplashScreen },
  { path: '/game', component: GameBoard },
  { path: '/game/:level', component: GameBoard, props: true },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
