<template>
  <section class="class-detail">
    <div class="container">
      <button class="back-btn" @click="$router.back()">← Back to Classes</button>

      <div v-if="lesson" class="lesson-info">
        <img :src="lesson.image" alt="lesson image" class="lesson-image">

        <div class="lesson-details">
          <h1>{{ lesson.subject }}</h1>
          <p><strong>Location:</strong> {{ lesson.location }}</p>
          <p><strong>Price:</strong> ${{ lesson.price }}</p>
          <p><strong>Spaces Available:</strong> {{ lesson.spaces }}</p>
          <p><strong>Duration:</strong> {{ lesson.duration }}</p>
          <p><strong>Teacher:</strong> {{ lesson.teacher }}</p>
          <p><strong>Description:</strong> {{ lesson.description }}</p>

          <button 
            :disabled="lesson.spaces === 0" 
            @click="addToCart(lesson)"
          >
            {{ lesson.spaces === 0 ? "Full" : "Add to Cart" }}
          </button>
        </div>
      </div>

      <div v-else>
        <p>Class not found.</p>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store/store.js";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ClassDetailPage",
  setup() {
    const route = useRoute();
    const lessonId = route.params.id;

    const lesson = computed(() =>
      store.state.lessons.find(l => l.id === lessonId)
    );

    const addToCart = (lesson) => store.addToCart(lesson);

    return { lesson, addToCart };
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.back-btn {
  margin-bottom: 1.5rem;
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
}

.lesson-info {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 10px;
}

.lesson-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.lesson-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lesson-details h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.lesson-details p {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.lesson-details button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.lesson-details button:hover:enabled {
  background-color: #1d4ed8;
}

.lesson-details button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
</style>


