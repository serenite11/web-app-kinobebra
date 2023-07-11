import jwtDecode from "jwt-decode";
import axios from "axios";
import {IUserInfo} from "../store/features/UserSlice";
import {ILoginUser, IRegisterUser} from "../types/registerUser";

export const registration = async (outputData : FormData): Promise<IUserInfo> => {
  const {data} = await axios.post('http://localhost:8080/user/sign-up', outputData)
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token) as IUserInfo
}

export const login = async (outputData : ILoginUser ): Promise<IUserInfo> => {
  const {data} = await axios.post('http://localhost:8080/user/sign-in', outputData)
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token) as IUserInfo
}


export const checkAuth = async () => {
  const {data} = await axios.get('http://localhost:8080/auth', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  return data.user
}