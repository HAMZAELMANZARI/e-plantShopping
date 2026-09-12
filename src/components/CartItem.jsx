import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../features/CartSlice.jsx';

export default function CartItem({ item, id }) {
  const dispatch = useDispatch();
  const totalItemValue = item.price * item.qty;

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Unit price: ${item.price.toFixed(2)}</p>
        <p>Total: ${totalItemValue.toFixed(2)}</p>
      </div>
      <div className="qty-controls">
        <button
          type="button"
          onClick={() => handleQuantityChange(item.qty - 1)}
          className="btn secondary"
          aria-label={`Decrease quantity for ${item.name}`}
        >
          -
        </button>
        <span>{item.qty}</span>
        <button
          type="button"
          onClick={() => handleQuantityChange(item.qty + 1)}
          className="btn"
          aria-label={`Increase quantity for ${item.name}`}
        >
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(removeItem(id))} className="btn secondary">
          Delete
        </button>
      </div>
    </div>
  );
}
