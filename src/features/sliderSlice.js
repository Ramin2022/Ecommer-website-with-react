import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../assets/data/dummyData";
const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: sliderData.length,
  },
  reducers: {
    // next slide reducer
    nextSlide(state, action) {
      console.log("state", state.value);
      console.log("action", action.payload);
      state.value = action.payload > state.length -1 ? 0 : action.payload;
    },
    // prev slide reducer
    prevSlide(state, action) {
      console.log("state", state.value);
      console.log("action", action.payload);
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
  },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
