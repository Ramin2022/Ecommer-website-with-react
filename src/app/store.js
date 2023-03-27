import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/sliderSlice";
import productReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
