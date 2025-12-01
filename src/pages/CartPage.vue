<template>
  <section class="cart">
    <div class="container">
      <h1 class="page-title">Shopping Cart</h1>

      <div v-if="cartItems.length > 0" class="cart-table">
        <div v-for="item in cartItems" :key="item.lesson.id" class="cart-item">
          <div class="cart-info">
            <img :src="item.lesson.image" alt="lesson image" class="cart-icon">
            <div>
              <h3>{{ item.lesson.subject }}</h3>
              <p>Location: {{ item.lesson.location }}</p>
              <p>Price: ${{ item.lesson.price }}</p>
              <p>Quantity: {{ item.qty }}</p>
            </div>
          </div>
          <button @click="removeFromCart(item.lesson.id)">Remove</button>
        </div>
      </div>

      <div v-else class="empty-cart">
        <p>Your cart is empty.</p>
      </div>

      <div v-if="cartItems.length > 0" class="checkout">
        <h2>Checkout</h2>
        <form @submit.prevent="submitOrder">
          <label>
            Name:
            <input type="text" v-model="name" placeholder="Your Name">
          </label>
          <label>
            Phone:
            <input type="text" v-model="phone" placeholder="Your Phone">
          </label>
          <button type="submit" :disabled="!isFormValid">Checkout</button>
        </form>
        <p v-if="confirmation" class="confirmation">{{ confirmation }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store/store.js";

export default {
  name: "CartPage",
  data() {
    return {
      name: "",
      phone: "",
      confirmation: "",
      isSubmitting: false
    };
  },
  computed: {
    cartItems() {
      return store.cartItems.value;
    },
    isFormValid() {
      const nameValid = /^[A-Za-z\s]+$/.test(this.name);
      const phoneValid = /^[0-9]+$/.test(this.phone);
      return nameValid && phoneValid && this.cartItems.length > 0;
    },
  },
  methods: {
    removeFromCart(id) {
      store.removeFromCart(id);
    },
  async submitOrder() {
    if (this.isSubmitting) return; 
    this.isSubmitting = true;

    try {
      //Post the order
      const orderBody = {
        name: this.name,
        phone: this.phone,
        lessons: this.cartItems.map(item => ({
          lessonId: item.lesson._id,
          qty: item.qty
        }))
      };

      const orderRes = await fetch("https://after-school-backend-564j.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderBody)
      });

      const savedOrder = await orderRes.json();

      // Update lesson spaces
      for (const item of this.cartItems) {
        await fetch(`https://after-school-backend-564j.onrender.com/api/lessons/${item.lesson._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            spaces: Math.max(item.lesson.spaces - item.qty, 0)
          })
        });
      }

      // Clear cart & show confirmation
      store.clearCart();
      this.$router.push({ 
        name: "OrderConfirmation",
        query: { 
          customerName: this.name, 
          orderId: savedOrder._id 
        }
      });

    } catch (err) {
      console.error("Order submission failed:", err);
    } finally {
      this.isSubmitting = false;
    }
  }
  },
};
</script>

<style scoped>
/* Main page padding to separate from navbar/footer */
.cart {
  padding: 6rem 1rem 4rem; /* top, sides, bottom */
  background-color: #fdfdfd;
}

/* Page title */
.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #111827;
}

/* Cart table */
.cart-table {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 10px;
  transition: box-shadow 0.3s;
}

.cart-item:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cart-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cart-icon {
  width: 80px; /* increased for better visibility */
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
}

.cart-item button {
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.cart-item button:hover {
  background-color: #dc2626;
}

/* Empty cart message */
.empty-cart {
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 2rem;
}

/* Checkout form */
.checkout {
  max-width: 400px;
  margin: 0 auto;
}

.checkout h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.checkout form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.checkout label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.checkout input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #d1d5db;
}

.checkout button {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.checkout button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.checkout button:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.confirmation {
  margin-top: 1rem;
  color: #16a34a;
  font-weight: 600;
  text-align: center;
}
</style>




