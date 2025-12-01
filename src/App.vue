<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavigation from './components/MainNavigation.vue'
</script>

<template>
  <MainNavigation />
  <router-view></router-view>
</template>

<style scoped></style>
