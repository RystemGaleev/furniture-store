import { configureStore } from '@reduxjs/toolkit';
import products from './ProductSlice';
import cart from './CartSlice';
import SingleProduct from './CartSlice';

const store = configureStore({
  reducer: {
    products,
    cart,
    SingleProduct,
  },
});

export default store;
