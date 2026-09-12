import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice.jsx';
import lavenderImg from '../assets/lavender.svg';
import snakeImg from '../assets/snake.svg';
import aloeImg from '../assets/aloe.svg';

const products = [
  { id: 'p1', name: 'Aromatic Lavender', desc: 'Fragrant lavender perfect for windowsills and sachets.', price: 8.5, img: lavenderImg, section: 'Aromatic Plants' },
  { id: 'p2', name: 'English Rosemary', desc: 'Culinary herb with a fresh, pine-like scent.', price: 9.5, img: lavenderImg, section: 'Aromatic Plants' },
  { id: 'p3', name: 'Mint Bundle', desc: 'Cool and fragrant leaves ideal for teas and décor.', price: 7.25, img: lavenderImg, section: 'Aromatic Plants' },
  { id: 'p4', name: 'Lemon Balm', desc: 'Bright citrus aroma for kitchens and patios.', price: 8.0, img: lavenderImg, section: 'Aromatic Plants' },
  { id: 'p5', name: 'Sweet Basil', desc: 'Classic herb for cooking and aromatic garden corners.', price: 6.75, img: lavenderImg, section: 'Aromatic Plants' },
  { id: 'p6', name: 'Oregano', desc: 'Robust culinary herb with a savory fragrance.', price: 7.5, img: lavenderImg, section: 'Aromatic Plants' },

  { id: 'p7', name: 'Snake Plant', desc: 'Robust indoor plant that tolerates low light.', price: 15.0, img: snakeImg, section: 'Decorative Plants' },
  { id: 'p8', name: 'Monstera Deliciosa', desc: 'Large split leaves for a statement indoor corner.', price: 18.5, img: snakeImg, section: 'Decorative Plants' },
  { id: 'p9', name: 'Peace Lily', desc: 'Elegant foliage with striking white blooms.', price: 16.25, img: snakeImg, section: 'Decorative Plants' },
  { id: 'p10', name: 'Spider Plant', desc: 'Easygoing houseplant with arching green leaves.', price: 13.5, img: snakeImg, section: 'Decorative Plants' },
  { id: 'p11', name: 'ZZ Plant', desc: 'Low-maintenance glossy foliage for busy homes.', price: 17.0, img: snakeImg, section: 'Decorative Plants' },
  { id: 'p12', name: 'Rubber Plant', desc: 'Bold, glossy leaves perfect for modern interiors.', price: 20.0, img: snakeImg, section: 'Decorative Plants' },

  { id: 'p13', name: 'Aloe Vera', desc: 'Medicinal succulent for skin care and easy maintenance.', price: 12.0, img: aloeImg, section: 'Medicinal Plants' },
  { id: 'p14', name: 'Echinacea', desc: 'Traditional plant known for supporting wellness rituals.', price: 11.5, img: aloeImg, section: 'Medicinal Plants' },
  { id: 'p15', name: 'Chamomile', desc: 'Soft herbal blooms often used for soothing infusions.', price: 10.25, img: aloeImg, section: 'Medicinal Plants' },
  { id: 'p16', name: 'Calendula', desc: 'Bright flowers prized for their skin-soothing benefits.', price: 9.75, img: aloeImg, section: 'Medicinal Plants' },
  { id: 'p17', name: 'Peppermint', desc: 'Refreshing medicinal herb for calming herbal blends.', price: 8.5, img: aloeImg, section: 'Medicinal Plants' },
  { id: 'p18', name: 'Ginger', desc: 'Warm-rooted plant valued for flavor and traditional care.', price: 14.0, img: aloeImg, section: 'Medicinal Plants' }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const onAdd = (p) => {
    dispatch(addItem({ id: p.id, name: p.name, price: p.price, img: p.img }));
  };

  const sections = products.reduce((acc, p) => {
    (acc[p.section] = acc[p.section] || []).push(p);
    return acc;
  }, {});

  return (
    <div className="container page-shell">
      <div className="section-header">
        <p className="eyebrow">Plant collection</p>
        <h2>Our favorite picks</h2>
      </div>

      {Object.entries(sections).map(([sectionName, items]) => (
        <section key={sectionName} className="plant-section">
          <h3>{sectionName}</h3>
          <div className="grid">
            {items.map((p) => {
              const alreadyAdded = Boolean(cartItems[p.id]);

              return (
                <div className="product-card" key={p.id}>
                  <img src={p.img} alt={p.name} />
                  <div className="product-info">
                    <h4>{p.name}</h4>
                    <p>{p.desc}</p>
                    <div className="product-meta">
                      <strong>${p.price.toFixed(2)}</strong>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => onAdd(p)}
                        disabled={alreadyAdded}
                        aria-label={alreadyAdded ? `${p.name} already added to cart` : `Add ${p.name} to cart`}
                      >
                        {alreadyAdded ? 'Added' : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
