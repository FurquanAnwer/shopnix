import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image: null,
  preview: null
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload.image;
      state.preview = action.payload.preview;
    }
  }
});

export const { setImage } = imageSlice.actions;

export default imageSlice.reducer;
