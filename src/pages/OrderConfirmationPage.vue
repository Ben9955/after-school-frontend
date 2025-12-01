<template>
  <section class="confirmation">
    <div class="confirmation-box" v-if="order">
      <h1>🎉 Order Confirmed!</h1>
      <p class="thank-you">Thank you for your purchase, {{ customerName }}!</p>

      <div class="order-summary">
        <h2>Order Summary</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.lesson._id">
            <span>{{ item.lesson.subject }}</span>
            <span>${{ item.lesson.price }} × {{ item.qty }}</span>
          </li>
        </ul>
        <p class="total"><strong>Total:</strong> ${{ total }}</p>
      </div>

      <p class="info">You will receive a confirmation email shortly with all the details.</p>

      <router-link to="/" class="back-home">← Back to Home</router-link>
    </div>

    <div v-else>
      <p>Loading order details...</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrderConfirmationPage",
  data() {
    return {
      order: null,
    };
  },
  computed: {
    cartItems() {
      return this.order?.lessons || [];
    },
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.lesson.price * item.qty, 0);
    },
    customerName() {
      return this.order?.name || "Student";
    },
  },
  mounted() {
    const orderId = this.$route.query.orderId;
    if (orderId) {
      fetch(`https://after-school-backend-564j.onrender.com/api/orders/${orderId}`)
        .then(res => {
          if (!res.ok) throw new Error("Order not found");
          return res.json();
        })
        .then(order => {
          this.order = order;
        })
        .catch(err => {
          console.error("Failed to fetch order:", err);
        });
    }
  },
};
</script>

<style scoped>
.confirmation {
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  background-color: #0000;
}

.confirmation-box {
  background-color: #f9fafb;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.confirmation-box h1 {
  color: #2563eb;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.thank-you {
  font-size: 1.2rem;
  color: #111827;
  margin-bottom: 2rem;
}

.order-summary {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.order-summary h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #111827;
}

.order-summary ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.order-summary li {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.order-summary li:last-child {
  border-bottom: none;
}

.total {
  font-size: 1.1rem;
  color: #111827;
  text-align: right;
}

.info {
  color: #4b5563;
  margin-bottom: 2rem;
}

.back-home {
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #2563eb;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.3s;
}

.back-home:hover {
  background-color: #1d4ed8;
}
</style>

