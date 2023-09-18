import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({

    initialState:[],
    name:'CartSlice',
    reducers:{
      addCart:(state,action)=>{
        const myFound=state.find((product)=>product.id===action.payload.id)
        if(myFound){
         myFound.qutity+=1;
        }else{
            const proColen={...action.payload,qutity:1}
            state.push(proColen);
        }
        
      } , 
      remove:(state,action)=>{
        return state.filter((product)=>product.id !== action.payload.id)
      } ,
      clear:(state,action)=>{
        return [];
          },
    }
})

export const {addCart,remove,clear}=CartSlice.actions;
export default CartSlice.reducer;