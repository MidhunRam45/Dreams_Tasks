import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crudSlice";
import productSlice from "../../prouducts/productSlice";
import fetchSlice from "../../prouducts/fetchSlice";


export const Store=configureStore({
reducer:{
    users:crudSlice,
    products:productSlice,
    fetch:fetchSlice
}
})