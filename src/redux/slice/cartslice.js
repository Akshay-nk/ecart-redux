import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart: (state,action) => {
            state.push(action.payload);
        }, 
        removeFromCart:(state, action)=>{
          return state.filter((item)=> item.id !== action.payload)
        },
        emptyCart:(state)=>{
            state=[];
        }
        
        
    }
})

export const {addToCart,removeFromCart,emptyCart}=cartslice.actions
export default cartslice.reducer;