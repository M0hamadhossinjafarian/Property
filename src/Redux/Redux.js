import { configureStore } from "@reduxjs/toolkit";
import slice from './Createslice';
const store=configureStore({
    reducer:{
        shop:slice,
    }
})
export default store