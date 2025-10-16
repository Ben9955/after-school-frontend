<template>
  <section class="about-page">
    <div class="hero">
      <div class="container">
        <h1>About AfterSchool</h1>
        <p>Your go-to platform for finding the best after-school classes and activities for students.</p>
      </div>
    </div>

    <div class="mission container">
      <h2>Our Mission</h2>
      <p>We aim to empower students by providing a seamless way to discover, book, and attend enriching after-school classes tailored to their interests and needs.</p>
    </div>

    <div class="features container">
      <h2>Why Choose Us?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Wide Variety</h3>
          <p>From coding to art, music to sports, we offer a huge range of classes for every student.</p>
        </div>
        <div class="feature-card">
          <h3>Trusted Teachers</h3>
          <p>All our classes are led by experienced and certified instructors committed to student growth.</p>
        </div>
        <div class="feature-card">
          <h3>Easy Booking</h3>
          <p>Book classes online in just a few clicks, with real-time availability updates.</p>
        </div>
        <div class="feature-card">
          <h3>Safe & Reliable</h3>
          <p>We prioritize student safety, providing a secure platform for parents and students alike.</p>
        </div>
      </div>
    </div>

    <div class="team container">
      <h2>Meet Our Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member">
          <h3>Jane Smith</h3>
          <p>Founder & CEO</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member">
          <h3>John Doe</h3>
          <p>Head of Operations</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member">
          <h3>Emily Johnson</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </div>

    <div class="cta container">
      <h2>Ready to Explore Classes?</h2>
      <router-link to="/classes" class="cta-btn">Browse Classes</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  text-align: center;
  padding: 4rem 0;
}
.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Mission Section */
.mission {
  text-align: center;
  margin-bottom: 3rem;
}
.mission h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.mission p {
  font-size: 1.1rem;
  color: #4b5563;
}

/* Features Section */
.features h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.feature-card {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.feature-card p {
  font-size: 1rem;
  color: #4b5563;
}

/* Team Section */
.team h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.team-member {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 200px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.team-member img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
.team-member h3 {
  font-size: 1.2rem;
  font-weight: 600;
}
.team-member p {
  font-size: 1rem;
  color: #4b5563;
}

/* Call to Action */
.cta {
  text-align: center;
  margin: 3rem auto;
}
.cta h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.cta-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #2563eb;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s;
  text-decoration: none;
}
.cta-btn:hover {
  background: #1d4ed8;
}

@media(max-width:768px) {
  .hero h1 { font-size: 2rem; }
  .mission h2, .features h2, .team h2, .cta h2 { font-size: 1.75rem; }
  .feature-grid, .team-grid { gap: 1rem; }
}
</style>
