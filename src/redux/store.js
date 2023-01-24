import { configureStore } from '@reduxjs/toolkit';
import products from './ProductSlice';
import cart from './CartSlice';
import singleProduct from './CartSlice';
import favourites from './FavouritesSlice';

const store = configureStore({
  reducer: {
    products,
    cart,
    singleProduct,
    favourites,
  },
});

export default store;
