import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUserInfo {
  name: string,
  email: string
}

interface IUserState {
  userInfo: IUserInfo,
  isUserAuth: boolean
}


const initialState: IUserState = {
  userInfo: {
    name: 'Ivan',
    email: "ivan@gmail.com"
  },
  isUserAuth: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload
    },
    setUserAuth: (state, action: PayloadAction<boolean>) => {
      state.isUserAuth = action.payload
    }
  }
})

export const userReducer = userSlice.reducer

export const {setUserAuth, setUserData} = userSlice.actions

export const selectUserInfo = (state: {userReducer: IUserState}) => state.userReducer