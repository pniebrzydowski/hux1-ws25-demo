<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore'
const gameStore = useGameStore()
</script>

<template>
  <p>Difficulty: {{ gameStore.difficultyLabel }}</p>
</template>

<style scoped></style>
