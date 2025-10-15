<template>
  <section class="hero">
    <div class="container hero-container">
      <div class="hero-text">
        <h1>Find After-School Classes Near You</h1>
        <p>Explore a variety of activities and programs for students of all ages. Learn, have fun, and grow!</p>
        <router-link to="/classes">
          <button>Browse Classes</button>
        </router-link>
      </div>
      <div class="hero-image">
        <img src="https://cdn.pixabay.com/photo/2024/08/30/19/54/ai-generated-9009917_1280.png" alt="After-school activities illustration">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {
  background-color: #f3f4f6;
  padding: 4rem 0;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.hero-text p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #4b5563; /* gray-600 */
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
  }
  .hero-text h1 {
    font-size: 2rem;
  }
  .hero-text p {
    font-size: 1rem;
  }
}
</style>
