import { createSlice } from "@reduxjs/toolkit";


export const FavSlice=createSlice({
    initialState:[],
    name:'FavSlice',
    reducers:{
        addToFav:(state,action)=>{
            const Favfound=state.find((product)=>product.id===action.payload.id)
            if(Favfound){
                 Favfound.quantity+=1
            } else{
                const favColen={...action.payload , quantity:1}
                state.push(favColen)
            }
          
        },
        removeToFav:(state,action)=>{
            return state.filter((product)=>(
                product.id!==action.payload.id
            ))
        },
        clearToFav:(state,action)=>{
            return [];
        },
    }
})

export const{addToFav,removeToFav,clearToFav}=FavSlice.actions;
export default FavSlice.reducer;