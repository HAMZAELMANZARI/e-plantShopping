import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // items keyed by product id: { id, name, price, qty, img }
  items: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const id = item.id;
      if (state.items[id]) {
        state.items[id].qty += 1;
      } else {
        state.items[id] = { ...item, qty: 1 };
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].qty += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;
      if (state.items[id].qty > 1) {
        state.items[id].qty -= 1;
      } else {
        delete state.items[id];
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
    clearCart: (state) => {
      state.items = {};
    }
  }
});

export const { addItem, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
