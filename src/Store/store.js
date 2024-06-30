// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Slice/themeSlice';
import detailsReducer from '../Slice/detailsSlice';
import productReducer from '../Slice/productCategorySlice';
import pricingReducer from '../Slice/pricingSlice';
import imageReducer from '../Slice/imageSlice'; 



const store = configureStore({
  reducer: {
    theme: themeReducer,
    details: detailsReducer,
    product: productReducer,
    pricing:pricingReducer,
    image: imageReducer,
  },
});

export default store;
