<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <router-link to="/" class="logo">AfterSchool</router-link>

      <!-- Desktop Menu -->
      <ul class="menu desktop-menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/classes">Classes</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>

      <!-- Cart Icon -->
      <div
        class="cart-icon"
        :class="{ disabled: cartCount === 0 }"
        @click="onCartClick"        
      >
        <i class="fas fa-shopping-cart"></i>
        <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      </div>

      <!-- Mobile Hamburger -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ 'active': showMenu }"></span>
        <span :class="{ 'active': showMenu }"></span>
        <span :class="{ 'active': showMenu }"></span>
      </div>
    </div>

    <!-- Mobile Menu -->
    <ul v-show="showMenu" class="menu mobile-menu">
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/classes" @click="closeMenu">Classes</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
import store from "../store/store.js";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    cartCount() {
      return store.cartCount.value;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  toggleCart() {
      if (this.$route.path === "/cart") {
        this.$router.push("/classes");
      } else {
        this.$router.push("/cart");
      }
    },
    onCartClick() {
      if (this.cartCount === 0) return;
      this.toggleCart();
    }
  }
};
</script>

<style scoped>
/* Navbar Base */
.navbar {
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

/* Logo */
.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #2563eb;
  text-decoration: none;
}

/* Desktop Menu */
.menu.desktop-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu.desktop-menu li a {
  color: #111827;
  font-weight: 500;
  text-decoration: none;
}

.menu.desktop-menu li a:hover {
  color: #3b82f6;
}

/* Cart Icon */
.cart-icon {
  position: relative;
  font-size: 1.5rem;
  color: #111827;
  margin-left: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s, cursor 0.2s;
}

.cart-icon.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: #ef4444;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 0.8rem;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 3px;
  background: #111827;
  border-radius: 2px;
  transition: all 0.3s;
}

/* Hamburger Animation */
.hamburger span.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.active:nth-child(2) {
  opacity: 0;
}

.hamburger span.active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.menu.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
}

.menu.mobile-menu li a {
  padding: 0.5rem 1rem;
  display: block;
  font-weight: 500;
  text-decoration: none;
  color: #111827;
}

.menu.mobile-menu li a:hover {
  color: #3b82f6;
}

@media (max-width: 768px) {
  .menu.desktop-menu {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>








