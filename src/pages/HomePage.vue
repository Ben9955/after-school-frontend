<template>
  <div>
    <Hero />
    <Features />
    <Reviews />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Reviews from '../components/Reviews.vue'

export default {
  components: {Hero, Features, Reviews }
}
</script>
