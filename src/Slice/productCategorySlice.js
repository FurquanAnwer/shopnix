import { createSlice } from '@reduxjs/toolkit';

const productCategorySlice = createSlice({
  name: 'product',
  initialState: {
    productCategory: '',
    productDescription: '',
    SKUCode:'',
  },
  reducers: {
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setProductDescription: (state, action) => {
      state.productDescription = action.payload;
    },
    setSKUCode: (state, action) => {
      state.SKUCode = action.payload;
    },

  },
});

export const { setProductCategory,setProductDescription,setSKUCode } = productCategorySlice.actions;
export default productCategorySlice.reducer;
