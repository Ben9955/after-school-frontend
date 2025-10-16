import { reactive, computed } from "vue";

const state = reactive({
  lessons: [
    { 
      id: 1, 
      subject: "Math", 
      location: "Room 101", 
      price: 20, 
      spaces: 5, 
      image: "https://via.placeholder.com/250", 
      description: "Learn algebra, geometry, and more.", 
      duration: "60 mins", 
      teacher: "Mr. Smith"
    },
    { 
      id: 2, 
      subject: "Science", 
      location: "Lab 1", 
      price: 25, 
      spaces: 3, 
      image: "https://via.placeholder.com/250", 
      description: "Explore physics, chemistry, and biology.", 
      duration: "75 mins", 
      teacher: "Ms. Johnson"
    },
    { 
      id: 3, 
      subject: "Art", 
      location: "Studio A", 
      price: 15, 
      spaces: 0, 
      image: "https://via.placeholder.com/250", 
      description: "Painting, drawing, and creative projects.", 
      duration: "90 mins", 
      teacher: "Ms. Lee"
    },
    { 
      id: 4, 
      subject: "Music", 
      location: "Room 202", 
      price: 30, 
      spaces: 2, 
      image: "https://via.placeholder.com/250", 
      description: "Learn to play instruments and sing.", 
      duration: "60 mins", 
      teacher: "Mr. Brown"
    },
    { 
      id: 5, 
      subject: "Coding", 
      location: "Lab 2", 
      price: 35, 
      spaces: 4, 
      image: "https://via.placeholder.com/250", 
      description: "Introduction to programming and web development.", 
      duration: "90 mins", 
      teacher: "Ms. Davis"
    },
  ],
  cart: {}
});

const cartItems = computed(() => Object.values(state.cart));
const cartCount = computed(() => Object.values(state.cart).reduce((sum, e) => sum + e.qty, 0));

export default {
  state,
  cartItems,
  cartCount,

  setLessons(list) {
    state.lessons = list;
  },

  addToCart(lesson) {
    const id = lesson.id || lesson._id;
    if (!state.cart[id]) state.cart[id] = { lesson: { ...lesson }, qty: 0 };

    const lessonInList = state.lessons.find(l => (l.id || l._id) === id);
    if (lessonInList && state.cart[id].qty < lessonInList.spaces) {
      state.cart[id].qty += 1;
      lessonInList.spaces -= 1;
    }
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
