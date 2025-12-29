<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore'
const props = defineProps<{
  sudokuBlockIndex: number
  numberBlockIndex: number
}>()

const { board } = useGameStore()
</script>

<template>
  <div class="number-block">
    {{ board[props.sudokuBlockIndex - 1][props.numberBlockIndex - 1] || '' }}
  </div>
</template>

<style scoped>
.number-block {
  border: 1px solid #444;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
