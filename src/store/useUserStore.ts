import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Player 1')
  const level = ref(1)
  const display = computed(() => `${name.value} - Level ${level.value}`)
  const setName = (newName: string) => {
    name.value = newName
  }
  return { name, setName, display }
})
