import {$host, $authHost} from "./index"
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return jwt_decode(data)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwt_decode(data)
}

export const check = async () => {
    const {data} = await $host.post('api/user/login')
    return jwt_decode(data)
}   