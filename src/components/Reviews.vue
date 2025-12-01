<template>
  <section class="reviews">
    <div class="container">
      <h2 class="section-title">What Parents & Students Say</h2>
      <div class="reviews-grid">
        <div class="review-card">
          <p>"My child loves these classes! The teachers are fantastic and lessons are engaging."</p>
          <div class="reviewer">
            <img src="/images/person1.jpg" alt="Parent 1">
            <span>Francesca Doe</span>
          </div>
        </div>

        <div class="review-card">
          <p>"The flexible schedule makes it easy for us to fit lessons into our busy week."</p>
          <div class="reviewer">
            <img src="/images/person2.jpg" alt="Parent 2">
            <span>Mark Smith</span>
          </div>
        </div>

        <div class="review-card">
          <p>"Great variety of classes. My child has learned so much and even earned a certificate!"</p>
          <div class="reviewer">
            <img src="/images/person3.jpg" alt="Parent 3">
            <span>Lisa Wong</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style scoped>
.reviews {
  background-color: #f3f4f6;
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #111827;
}

/* Grid for reviews */
.reviews-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* Individual review card */
.review-card {
  flex: 1 1 250px;
  max-width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.review-card p {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.reviewer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.reviewer img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.reviewer span {
  font-weight: 600;
  color: #111827;
}

/* Responsive */
@media (max-width: 768px) {
  .reviews-grid {
    flex-direction: column;
    align-items: center;
  }

  .review-card {
    max-width: 90%;
    margin-bottom: 2rem;
  }
}
</style>
