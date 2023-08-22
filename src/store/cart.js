import { createSlice } from "@reduxjs/toolkit";
const initialCart = {
  isCartOpen: false,
  notification: null,
};
const toggleartSlice = createSlice({
  name: "Togglecart",
  initialState: initialCart,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const togglecartAction = toggleartSlice.actions;
export default toggleartSlice.reducer;
