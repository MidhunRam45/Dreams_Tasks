import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

 const productSlice=createSlice({

    name:"products",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
            alert("product add")
        },
        rem(state,action){
            console.log("hii");
      return state.filter((data)=>data.id !== action.payload.id)
        }
    }
})

export const {add,rem}=productSlice.actions;
export default productSlice.reducer 