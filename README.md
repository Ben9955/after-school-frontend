# After School Frontend

This is the frontend of my coursework project. It is built with **Vue.js** and communicates with the backend via **fetch**. The app allows students and parents to view lessons, add them to a shopping cart, and place orders.

## Features
- Display list of lessons using `v-for`
- Sort lessons by subject, location, price, or availability
- Add to cart and remove from cart functionality
- Checkout with name and phone validation
- Search lessons by typing (full-text search via backend)
- Hosted on **GitHub Pages**

## Important Links
- [GitHub Repository](https://github.com/Ben9955/after-school-frontend)
- [GitHub Pages URL](https://ben9955.github.io/after-school-frontend/)
- Fetches data from backend at: `https://after-school-backend-564j.onrender.com`

## How to Run Locally
1. Clone the repo:  
   `git clone https://github.com/Ben9955/after-school-frontend.git`
2. Install dependencies:  
   `npm install`
3. Start dev server:  
   `npm run dev`
4. Build for production:  
   `npm run build`
5. Preview production build:  
   `npm run preview`

## Notes
- Cart button only enabled when at least one lesson is added.
- Checkout button requires valid name (letters only) and phone (numbers only).
- All API requests are made using **fetch** promises.
