import {type CreateAxiosDefaults} from "axios";

export const apiConfig: CreateAxiosDefaults = {
    baseURL: process.env["NEXT_PUBLIC_API_URL"],
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}