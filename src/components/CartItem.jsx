import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../features/CartSlice.jsx';

export default function CartItem({ item, id }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Unit price: ${item.price.toFixed(2)}</p>
        <p>Total: ${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div className="qty-controls">
        <button type="button" onClick={() => dispatch(decreaseQty(id))} className="btn secondary">-</button>
        <span>{item.qty}</span>
        <button type="button" onClick={() => dispatch(increaseQty(id))} className="btn">+</button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(removeItem(id))} className="btn secondary">Delete</button>
      </div>
    </div>
  );
}
