import { createSlice } from "@reduxjs/toolkit";
const initialCart = {
  isCartOpen: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
