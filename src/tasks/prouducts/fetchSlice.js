import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchSlice=createSlice({
    name:"fetch",
    initialState :{
data:[]
    },
    status:"idle",
    reducers:{
              //  fetchproudcts(state,action){
              // state.data=action.payload
              //  }
    },
    extraReducers:(builder)=>{
      builder.addCase(getproducts.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.status="idle"
      })
      .addCase(getproducts.pending,(state,action)=>{
        state.status="loading"
      })
      .addCase(getproducts.rejected,(state,action)=>{
        state.status="error"
      })
    }
    
})

export const {fetchproudcts} = fetchSlice.actions;
export default fetchSlice.reducer

const baseUrl = "https://fakestoreapi.com/products";

export const getproducts=createAsyncThunk("get",async()=>{

         const response=await axios.get(baseUrl)
         console.log(response.data);
        return response.data

})


// export const getproducts=()=>{
//     return async function getProductsThunk(dispatch,getState){

//         try {
//             const response = await axios.get(baseUrl);
//             if (response) {
//               dispatch(fetchproudcts(response.data))
//             }
//           } catch (error) {
//             console.log(error);
//           }
//     }
// }