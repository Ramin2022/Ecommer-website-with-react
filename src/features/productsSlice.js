import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("fliteredData")) || storeData,
      singleProduct:
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
  },

  reducers: {
    filterProducts(state, action) {
      try {
        const filtered = storeData.filter(
          (product) => product.type === action.payload
        );
        console.log(filtered);
        console.log(action.payload);
        state.filteredProducts = filtered;
        const saveState = JSON.stringify(filtered);
        sessionStorage.setItem("fliteredData", saveState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
          (product) => product.id === action.payload
        );
        // console.log(action.payload)
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", savedState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const { filterProducts, singleProduct } = productsSlice.actions;

export default productsSlice.reducer;
