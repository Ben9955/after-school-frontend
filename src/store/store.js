import { reactive, computed } from "vue";

const state = reactive({
  lessons: [],
  cart: {}
});

const cartItems = computed(() => Object.values(state.cart));
const cartCount = computed(() => Object.values(state.cart).reduce((sum, e) => sum + e.qty, 0));

async function fetchLessons() {
  try {
    const res = await fetch("http://localhost:4001/api/lessons"); 
    console.log("Fetch lessons response:", res);
    const data = await res.json();
    console.log("Fetched lessons data:", data);
    state.lessons = data.map(lesson => ({
      ...lesson,
      id: lesson._id 
    }));
  } catch (err) {
    console.error("Failed to fetch lessons:", err);
  }
}


export default {
  state,
  cartItems,
  cartCount,
  fetchLessons, 

  setLessons(list) {
    state.lessons = list;
  },

  addToCart(lesson) {
    const id = lesson.id || lesson._id;
    const lessonInList = state.lessons.find(l => (l.id || l._id) === id);
    if (!lessonInList) return;

    if (lessonInList.spaces <= 0) return;

    if (!state.cart[id]) {
      state.cart[id] = { lesson: { ...lesson }, qty: 0 };
    }

    state.cart[id].qty += 1;

    lessonInList.spaces -= 1;
  },  

  removeFromCart(id) {
    const entry = state.cart[id];
    if (!entry) return;
    const lessonInList = state.lessons.find(l => (l.id || l._id) === id);
    if (lessonInList) lessonInList.spaces += entry.qty;
    delete state.cart[id];
  },

  clearCart() {
    Object.keys(state.cart).forEach(id => {
      const entry = state.cart[id];
      const lessonInList = state.lessons.find(l => (l.id || l._id) === id);
      if (lessonInList) lessonInList.spaces += entry.qty;
    });
    state.cart = {};
  }
};
