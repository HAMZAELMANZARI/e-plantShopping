import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/CartSlice.jsx';
import lavenderImg from '../assets/lavender.svg';
import snakeImg from '../assets/snake.svg';
import aloeImg from '../assets/aloe.svg';

const products = [
  {
    id: 'p1',
    name: 'Aromatic Lavender',
    desc: 'Fragrant lavender perfect for windowsills and sachets.',
    price: 8.5,
    img: lavenderImg,
    section: 'Aromatic Plants'
  },
  {
    id: 'p2',
    name: 'Snake Plant',
    desc: 'Robust indoor plant that tolerates low light.',
    price: 15.0,
    img: snakeImg,
    section: 'Decorative Plants'
  },
  {
    id: 'p3',
    name: 'Aloe Vera',
    desc: 'Medicinal succulent for skin care and easy maintenance.',
    price: 12.0,
    img: aloeImg,
    section: 'Medicinal Plants'
  }
];

export default function ProductList() {
  const dispatch = useDispatch();

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
            {items.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.img} alt={p.name} />
                <div className="product-info">
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                  <div className="product-meta">
                    <strong>${p.price.toFixed(2)}</strong>
                    <button type="button" className="btn" onClick={() => onAdd(p)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
