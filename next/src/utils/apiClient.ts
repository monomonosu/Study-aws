import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    responseType: 'json',
    headers: {
        "Content-Type": "application/json"
    }
})


export const apiServer = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT2,
    responseType: 'json',
    headers: {
        "Content-Type": "application/json"
    }
})