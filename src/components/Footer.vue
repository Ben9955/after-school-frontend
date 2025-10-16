<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-logo">
        <h2>AfterSchool</h2>
        <p>Helping students explore and grow through after-school classes and activities.</p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/classes">Classes</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: info@afterschool.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 AfterSchool. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #111827;
  color: #f9fafb;
  padding: 3rem 0 1rem 0;
  font-size: 0.95rem;
  position: ;
  bottom: 0;
  width: 100%;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.footer-logo h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.footer-logo p {
  color: #d1d5db;
}

.footer-links h3,
.footer-contact h3 {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links ul li a {
  color: #f9fafb;
  transition: color 0.3s;
}

.footer-links ul li a:hover {
  color: #3b82f6;
}

.footer-contact p {
  margin-bottom: 0.5rem;
  color: #d1d5db;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-icons img {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1); /* white icons */
  transition: filter 0.3s;
}

.social-icons img:hover {
  filter: brightness(0) invert(0.5) sepia(1) hue-rotate(200deg) saturate(5);
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #374151;
  padding-top: 1rem;
  color: #9ca3af;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-links ul {
    align-items: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
