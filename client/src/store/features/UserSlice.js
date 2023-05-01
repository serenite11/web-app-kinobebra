import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        name: 'Ivan',
        email: "ivan@gmail.com"
    },
    isUserAuth: true
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userInfo = action.payload
        },
        setUserAuth: (state, action) => {
            state.isUserAuth = action.payload
        }
    }
})

export const userReducer = userSlice.reducer

export const {setUserAuth, setUserData} = userSlice.actions

export const selectUserInfo = (state, action) => state.userReducer