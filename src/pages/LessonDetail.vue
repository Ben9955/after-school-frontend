<template>
  <div class="p-8 text-center">
    <h1 class="text-4xl font-bold text-purple-600">Lesson Detail Page</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>

<style scoped></style>
