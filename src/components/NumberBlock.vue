<script setup lang="ts">
const { value } = defineProps<{ value?: number }>()
</script>

<template>
  <div class="number-block">{{ value }}</div>
</template>

<style scoped>
.number-block {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  display: inline-block;
}
</style>
