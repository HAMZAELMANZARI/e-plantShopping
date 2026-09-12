import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/CartSlice.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function CartPage() {
  const items = useSelector((s) => s.cart.items);
  const entries = Object.entries(items);
  const total = entries.reduce((acc, [id, item]) => acc + item.qty * item.price, 0);

  return (
    <div className="container page-shell">
      <h2>Your Cart</h2>
      {entries.length === 0 && <p className="empty-state">Your cart is empty. Continue shopping to add plants.</p>}
      {entries.map(([id, item]) => (
        <CartItem key={id} item={item} id={id} />
      ))}
      <div className="summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <div className="summary-actions">
          <Link to="/products"><button className="btn secondary">Continue Shopping</button></Link>
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="container page-shell">
      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Fresh greenery for every room</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Discover a range of house plants, from aromatic herbs to decorative foliage.</p>
          <Link to="/products"><button className="btn">Shop Plants</button></Link>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const items = useSelector((s) => s.cart.items);
  const count = Object.values(items).reduce((acc, i) => acc + i.qty, 0);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-mark">🌿</span>
        <Link to="/">Paradise Nursery</Link>
      </div>
      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon" aria-label="shopping cart">🛒</span>
          <span>Cart</span>
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}
