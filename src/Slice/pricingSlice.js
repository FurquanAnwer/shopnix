import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  netPrice: 0,
  listPrice: 0,
  discount: 0,
  gstRate: 0,
  shippingCharges: 0,
  stockLevel: 0,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setNetPrice: (state, action) => {
      state.netPrice = action.payload;
    },
    setListPrice: (state, action) => {
      state.listPrice = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setGstRate: (state, action) => {
      state.gstRate = action.payload;
    },
    setShippingCharges: (state, action) => {
      state.shippingCharges = action.payload;
    },
    setStockLevel: (state, action) => {
      state.stockLevel = action.payload;
    },
  },
});

export const {
  setNetPrice,
  setListPrice,
  setDiscount,
  setGstRate,
  setShippingCharges,
  setStockLevel,
} = pricingSlice.actions;

export default pricingSlice.reducer;
