import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  totalPrice: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddTowishlist: (state, action) => {
      const hello = action.payload;
     const newItem = action.payload;

      const existingItem = state.wishlist.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.wishlist.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
      }

    }, removeFromwishlist : (state , action) => {
      
      state.wishlist = state.wishlist.filter((item)=>item.id !== action.payload.id)
    },
  },
});

export const { AddTowishlist, removeFromwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
