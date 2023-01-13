import { configureStore } from '@reduxjs/toolkit';
import products from './ProductSlice';
import cart from './CartSlice';

const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export default store;
