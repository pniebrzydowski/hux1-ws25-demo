<script setup lang="ts">
import NumberBlock from './NumberBlock.vue'
const randomValue = () => Math.round(Math.random() * 8) + 1
</script>

<template>
  <div class="sudoku-block">
    <NumberBlock v-for="block in 9" :key="block" :value="randomValue()" />
  </div>
</template>

<style scoped>
.sudoku-block {
  display: inline-block;
}
</style>
