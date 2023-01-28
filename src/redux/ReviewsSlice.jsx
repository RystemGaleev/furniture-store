import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
  },
  reducers: {
    pushReviews(state, action) {
      state.reviews = [...state.reviews, action.payload];
    },
  },
});
export const { pushReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
