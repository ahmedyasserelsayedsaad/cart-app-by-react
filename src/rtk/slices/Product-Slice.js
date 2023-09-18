import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk("ProductsSlice/fetchProducts",async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    return data;
})

export const ProductsSlice=createSlice({
    initialState:[],
    name:"ProductsSlice",
    reducers:{},
    extraReducers:(bulider)=>{
    bulider.addCase(fetchProducts.fulfilled,(state,action)=>{
        return action.payload;
    })
    }
})

export const {}=ProductsSlice.actions;
export default ProductsSlice.reducer;