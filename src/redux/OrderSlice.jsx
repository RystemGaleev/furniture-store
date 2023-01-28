import { createSlice } from '@reduxjs/toolkit';

const OrdersSlice = createSlice({
  name: 'orders',
  initialState: { orders: [] },
  reducers: {
    addToOrders: (state, action) => {
      const targetItem = state.orders.find((item) => item.id === action.payload.id);
      if (targetItem) {
        targetItem.quantity++;
      } else {
        state.orders = [...state.orders, ...action.payload];
      }
    },
  },
});
export const { addToOrders } = OrdersSlice.actions;
export default OrdersSlice.reducer;
