import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const targetItem = state.cart.find((item) => item.id === action.payload.id);
      if (targetItem) {
        targetItem.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeInCart: (state, action) => {
      const targetItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = targetItem;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    incrementProduct: (state, action) => {
      const targetItem = state.cart.find((item) => item.id === action.payload);
      targetItem.quantity++;
    },
    decrementProduct: (state, action) => {
      const targetItem = state.cart.find((item) => item.id === action.payload);
      if (targetItem.quantity === 1) {
        targetItem.quantity = 1;
      } else {
        targetItem.quantity--;
      }
    },
  },
});
export const { addToCart, removeInCart, clearCart, incrementProduct, decrementProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
