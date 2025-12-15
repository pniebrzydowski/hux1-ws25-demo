<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore'
const userStore = useUserStore()
</script>

<template>
  <p>{{ userStore.fullName }}</p>
</template>

<style scoped></style>
