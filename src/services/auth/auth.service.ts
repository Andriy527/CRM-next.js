import {IauthRespone, IsignInParams} from "@/services/auth/auth.type";
import $base from "@/api/base";
import TokenService from "@/services/token/token.service";

class AuthService {
    async signIn ({type, data}: IsignInParams): Promise<void> {
        const response = await $base.post<IauthRespone>(`/auth/${type}`, data);

        if (response.data.accessToken) {
            TokenService.addAccessToken(response.data.accessToken);
        }
    }

    async logout () {
        const response = await $base.post<boolean>('/auth/logout')

        if (response.data) {
            TokenService.removeAccessToken();
        }
    }

    async getNewToken () {
        const response = await $base.post<IauthRespone>('/auth/login/access-token');

        if (response.data.accessToken) {
            TokenService.addAccessToken(response.data.accessToken);
        }
    }
}

export default new AuthService();