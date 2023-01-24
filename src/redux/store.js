import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './ProductSlice';
import cartReducer from './CartSlice';
import singleProductReducer from './CartSlice';
import favouritesReducer from './FavouritesSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
  favourites: favouritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
