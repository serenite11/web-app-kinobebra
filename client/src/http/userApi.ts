import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (outputData) => {
    const {data} = await $host.post('user/sign-in', outputData)
    localStorage.setItem('token', data)
    return jwtDecode(data)
}

export const login = async (email, password) => {
    const {data} =  await $host.post('user/sign-in', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


export const checkAuth = async () => {
    const {data} =  await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}