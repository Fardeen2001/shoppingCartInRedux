import { configureStore } from "@reduxjs/toolkit";
import togglecart from "./cart";
import cartfunction from "./cartfunction";

const store = configureStore({
  reducer: {
    togglecart: togglecart,
    cartFunctions: cartfunction,
  },
});

export default store;
