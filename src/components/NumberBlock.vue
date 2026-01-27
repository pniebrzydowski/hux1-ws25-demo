<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore'
import { computed } from 'vue'
const props = defineProps<{
  sudokuBlockIndex: number
  numberBlockIndex: number
}>()

const { board } = useGameStore()
const number = computed(() => {
  const sudokuBlock = board[props.sudokuBlockIndex - 1]
  if (!sudokuBlock) return ''
  return sudokuBlock[props.numberBlockIndex - 1] || ''
})
</script>

<template>
  <div class="number-block">
    {{ number }}
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
