import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./store/features/UserSlice.js";

export const store = configureStore({
    reducer : {
        userReducer
    },
    devTools: true
})