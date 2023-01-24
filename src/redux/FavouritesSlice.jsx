import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: { favourites: [] },
  reducers: {
    addToFavourites: (state, action) => {
      const targetItem = state.favourites.find((item) => item.id === action.payload.id);
      if (targetItem) {
        return state;
      } else {
        state.favourites.push({ ...action.payload });
      }
    },
    removeInFavourites: (state, action) => {
      const targetItem = state.favourites.filter((item) => item.id !== action.payload);
      state.favourites = targetItem;
    },
    clearFavourites: (state) => {
      state.favourites = [];
    },
  },
});
export const { addToFavourites, removeInFavourites, clearFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
