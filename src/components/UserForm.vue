<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore'
const userStore = useUserStore()
</script>

<template>
  <input type="text" v-model="userStore.name" />
</template>

<style scoped></style>
