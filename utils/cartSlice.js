import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        total:0,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            state.total=state.total+action.payload.price;
        },
        clearCart:(state)=>{
            state.items=[];
            state.total=0;
        },
    }
});


export const {addItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;