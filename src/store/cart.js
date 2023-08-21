import { createSlice } from "@reduxjs/toolkit";
const initialCart = {
  isCartOpen: false,
};
const toggleartSlice = createSlice({
  name: "Togglecart",
  initialState: initialCart,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const togglecartAction = toggleartSlice.actions;
export default toggleartSlice.reducer;
