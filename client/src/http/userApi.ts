import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const registration = async (outputData) => {
    const {data} = await axios.post('http://localhost:8080/user/sign-up', outputData)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (outputData) => {
    const {data} = await axios.post('http://localhost:8080/user/sign-in', outputData)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

const $authHost =  axios.create({
    baseURL: 'http://localhost:8080'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export const checkAuth = async () => {
    const {data} =  await $authHost.get('/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}