import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "./data";

const crudSlice=createSlice({
    name:"crudSlice",
    initialState:userDetails,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        updateUser:(state,action)=>{
           const {name,email,id}=action.payload;
           const upUser=state.find((f)=>f.id==id);
           if(upUser){
            upUser.name=name;
            upUser.email=email
           }
        },
        DeleteUser:(state,action)=>{
           const {id}=action.payload;
          const upUserId = state.find((f)=>f.id==id);
          if(upUserId){
            return state.filter((f)=>f.id !==id)
          }
        },
        InputChange:(state,action)=>{
          if(!action.payload){
            return state
          }else{
            const filteredData=state.filter((dat)=>dat.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()));
            return filteredData
          }
        },
        CancelInput:(state,action)=>{
              return state=userDetails
        }
    }
})

export const {addUser,updateUser,DeleteUser,InputChange,CancelInput}=crudSlice.actions
export default crudSlice.reducer