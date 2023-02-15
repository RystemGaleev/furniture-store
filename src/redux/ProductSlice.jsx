import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/furniture`).then(
        (data) => data.json(),
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.loading = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = 'loaded';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = 'error';
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
