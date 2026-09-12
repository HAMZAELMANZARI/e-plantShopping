# Paradise Nursery — e-plantShopping

Simple shopping cart application for the Paradise Nursery final project.

This repository contains the core components required for the AI-graded submission. The following files are included and should be in a public GitHub repo named `e-plantShopping`:

- README.md (this file)
- src/AboutUs.jsx
- src/App.css
- src/App.jsx
- src/features/CartSlice.jsx
- src/components/ProductList.jsx
- src/components/CartItem.jsx

Getting started (typical React app):

1. Create a React app (if not already):
   npx create-react-app e-plantShopping
2. Copy the `src/` contents from this repo into the created app's `src/` folder.
3. Install Redux Toolkit and React-Redux:
   npm install @reduxjs/toolkit react-redux
4. Start the app:
   npm start

Notes for submission:
- Ensure the repo is public and named `e-plantShopping`.
- Deploy the app (GitHub Pages, Netlify, Vercel, etc.) and include the live URL when submitting.
- The provided files are intended to be integrated into a standard CRA (Create React App) scaffold; adapt paths if your project structure differs.

Description of files:
- App.jsx: Main app with routing, store provider and basic pages (Landing, Products, Cart, About).
- AboutUs.jsx: Simple About Us section.
- App.css: Minimal styling for layout and cards.
- CartSlice.jsx: Redux Toolkit slice with actions to add/increase/decrease/remove items and compute totals.
- ProductList.jsx: Renders product cards and dispatches add-to-cart actions.
- CartItem.jsx: Renders each cart item with quantity controls.

If you want, I can also scaffold a full Create React App structure here, or adapt these files into your existing repository if you provide its path/remote.
