import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/Product-Slice";
import CartSlice from "./slices/Cart-Slice";
import favSlice from "./slices/fav-Slice";

export const Store=configureStore({
    reducer:{
     products:ProductSlice,
     cart:CartSlice,
     fav:favSlice,
    }
});