import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  cartChanged: false,
};
const cartfunctionslice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.cartChanged = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalAmount += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.totalQuantity--;
      state.cartChanged = true;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

export const cartfunctionActions = cartfunctionslice.actions;
export default cartfunctionslice.reducer;
