import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import  AddTowishlist  from "./slices/wishlist";


export const  store =  configureStore({
    reducer:{
   
        cart:cartSlice,
        wishlist:AddTowishlist,
    }
})