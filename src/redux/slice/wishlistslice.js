import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:'wishlistslice',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload);

        },
        dltwishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist}=wishlistslice.actions
export const {dltwishlist}=wishlistslice.actions;
export default wishlistslice.reducer