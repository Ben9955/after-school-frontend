<template>
  <section class="classes">
    <div class="container">
      <h1 class="page-title">Available Classes</h1>

      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="searchLessons"
          placeholder="Search lessons..."
        >
      </div>

      <div class="sort-controls">
        <label>
          Sort by:
          <select v-model="sortBy">
            <option value="subject">Subject</option>
            <option value="location">Location</option>
            <option value="price">Price</option>
            <option value="spaces">Spaces</option>
          </select>
        </label>

        <label>
          Order:
          <select v-model="sortOrder">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>

      <div class="lessons-grid">
        <div v-for="lesson in sortedLessons" :key="lesson.id" class="lesson-card">
          <router-link :to="`/class/${lesson.id}`" class="lesson-link">
            <img :src="lesson.image" alt="lesson image" class="lesson-icon">
            <h3>{{ lesson.subject }}</h3>
          </router-link>
          <p><strong>Location:</strong> {{ lesson.location }}</p>
          <p><strong>Price:</strong> ${{ lesson.price }}</p>
          <p><strong>Spaces:</strong> {{ lesson.spaces }}</p>
          <button :disabled="lesson.spaces === 0" @click="addToCart(lesson)">
            {{ lesson.spaces === 0 ? "Full" : "Add to Cart" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store/store.js";

export default {
  name: "ClassesPage",
  data() {
    return {
      sortBy: "subject",
      sortOrder: "asc",
      searchQuery: ""
    };
  },
  computed: {
    sortedLessons() {
      return [...store.state.lessons].sort((a, b) => {
        let valA = a[this.sortBy];
        let valB = b[this.sortBy];

        if (typeof valA === "string") {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }

        return this.sortOrder === "asc"
          ? valA > valB ? 1 : -1
          : valA < valB ? 1 : -1;
      });
    }
  },
  mounted() {
    store.fetchLessons();
  },
  methods: {
    addToCart(lesson) {
      store.addToCart(lesson);
    },
    async searchLessons() {
      if (!this.searchQuery.trim()) {
        store.fetchLessons();
        return;
      }

      const res = await fetch(`https://after-school-backend-564j.onrender.com/api/lessons/search?q=${this.searchQuery}`);
      const data = await res.json();
      store.setLessons(data.map(l => ({ ...l, id: l._id })));
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #111827;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
}

.sort-controls {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.sort-controls label {
  font-weight: 500;
}

.sort-controls select {
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #d1d5db;
}

.lessons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.lesson-card {
  flex: 1 1 260px;
  max-width: 280px;
  background: #f9fafb;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.lesson-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.lesson-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.lesson-icon {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.lesson-link:hover .lesson-icon {
  transform: scale(1.05);
}

.lesson-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.lesson-card p {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.lesson-card button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.lesson-card button:hover:not(:disabled) {
  background: #1d4ed8;
}

.lesson-card button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}
</style>

