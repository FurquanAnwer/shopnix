import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    productType: '',
    category: '',
    subCategory: '',
  },
  reducers: {
    setProductType: (state, action) => {
      state.productType = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

export const { setProductType, setCategory, setSubCategory } = detailsSlice.actions;
export default detailsSlice.reducer;
