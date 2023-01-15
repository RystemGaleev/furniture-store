import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: { singleProduct: [] },
  reducers: {
    currentProduct(state, action) {
      state.singleProduct = action.payload;
    },
  },
});

export const { currentProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
