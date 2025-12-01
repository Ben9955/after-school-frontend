<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">Our Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <img src="/images/image1.jpg" alt="Online Classes" class="feature-icon">
          <h3>Online Classes</h3>
          <p>Access a wide range of lessons from the comfort of your home, anytime.</p>
        </div>

        <div class="feature-card">
          <img src="/images/image2.png" alt="Professional Teachers" class="feature-icon">
          <h3>Professional Teachers</h3>
          <p>Learn from experienced instructors who guide students every step of the way.</p>
        </div>

        <div class="feature-card">
          <img src="/images/image3.jpg" alt="Flexible Schedule" class="feature-icon">
          <h3>Flexible Schedule</h3>
          <p>Choose classes that fit your schedule, morning, afternoon, or evening.</p>
        </div>

        <div class="feature-card">
          <img src="/images/image4.jpg" alt="Certificates" class="feature-icon">
          <h3>Certificates</h3>
          <p>Receive a certificate upon completion to showcase your child’s achievements.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped>
.features {
  padding: 4rem 0;
  background-color: #ffffff;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #111827;
}

/* Grid for features */
.features-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* Individual feature card */
.feature-card {
  flex: 1 1 250px;
  max-width: 280px;
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transform: scale(1.1);
}

.feature-icon {
  width: 100px;    
  height: 100px;     
  margin-bottom: 1rem;
  object-fit: cover; 
  border-radius: 12px;
  transition: transform 0.3s; 
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.feature-card p {
  font-size: 1rem;
  color: #4b5563;
}

/* Responsive */
@media (max-width: 768px) {
  .features-grid {
    flex-direction: column;
    align-items: center;
  }

  .feature-card {
    max-width: 90%;
    margin-bottom: 2rem;
  }
}


</style>
