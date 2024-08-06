import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  quantity:0,
  totalprice:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const hello = action.payload;


      const existedItem =   state.cart.find(item => item.id === action.payload.id);
      if (existedItem) {
        existedItem.quantity++
      }else{
      state.cart.push({
        id: hello.id, 
        name: hello.name,
        price: hello.price,
        image: hello.image,
        quantity: 1,
      });}

    }, removeFromCart : (state , action) => {
      state.cart = state.cart.filter((item)=>item.id !== action.payload.id)
    },
    increseQuantity: (state, action) => {
      const itemId = action.payload.id;

      // Iterate through the cart and update quantity directly
      state.cart.forEach(item => {
        if (item.id === itemId) {
          item.quantity++;
        }
      });
    },
    DecreseQuantity: (state, action) => {
      const itemId = action.payload.id;

      // Iterate through the cart and update quantity directly
      state.cart.forEach(item => {
        if (item.id === itemId) {
          item.quantity--;
        }
      });},
  },
});

export const { AddToCart , removeFromCart, increseQuantity, DecreseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
