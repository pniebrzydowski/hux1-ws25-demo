<script setup lang="ts">
import { transformArray } from '@/utils/transformArray'
import SudokuBlock from './SudokuBlock.vue'
import { useGameStore } from '@/store/useGameStore'
import { useQuery } from '@tanstack/vue-query'
const gameStore = useGameStore()
const { isLoading } = useQuery({
  queryKey: ['sudoku-board'],
  queryFn: async () => {
    const url = 'https://sugoku.onrender.com/board?difficulty=easy'
    const res = await fetch(url)
    const data = await res.json()
    if (data?.board) {
      gameStore.board = transformArray(data.board)
    }

    return data
  },
})
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div class="board" v-if="gameStore.board.length">
    <SudokuBlock v-for="n in 9" :key="n" :sudoku-block-index="n" />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  width: calc(100vmin - 4rem);
  height: calc(100vmin - 4rem);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
