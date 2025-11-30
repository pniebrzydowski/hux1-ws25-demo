<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'

const { title = 'Sudoko!' } = defineProps<{
  title?: string
}>()
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="game-board">
    <SudokuBlock v-for="block in 9" :key="block" />
  </div>
</template>

<style scoped></style>
