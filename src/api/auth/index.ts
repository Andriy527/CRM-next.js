import axios, {AxiosError} from "axios";
import {apiConfig} from "@/api/config";
import TokenService from "@/services/token/token.service";
import AuthService from "@/services/auth/auth.service";

const $auth = axios.create(apiConfig);

$auth.interceptors.request.use(config => {
        const token = TokenService.getAccessToken();

        if (config.headers && token) {
            config.headers.Authorization = `bearer ${token}`
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    })

$auth.interceptors.response.use(
    config => {
        return config
    },
    async error => {
        const originalRequest = error.confing;

        if (error.request.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await AuthService.getNewToken();

                return $auth.request(originalRequest);
            } catch (e: any) {
                if (e.response?.data?.message === 'jwt expired') {
                    TokenService.removeAccessToken();
                }
            }
        }

        return Promise.reject(error);
    }
)

export default $auth;