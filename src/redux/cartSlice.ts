import { createSlice } from "@reduxjs/toolkit";
import { CartSliceState } from "../types.ts/CartTypes";

const initialState: CartSliceState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.cart.splice(action.payload, 1);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
