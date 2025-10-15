<template>
  <div class="app-container">
    <Navbar />
    <main class="page-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* full viewport height */
}

.page-content {
  flex: 1; 
}
</style>


