import { configureStore } from '@reduxjs/toolkit';
import products from './ProductSlice';

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
