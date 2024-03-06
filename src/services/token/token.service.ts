import Cookies from "js-cookie";
import {TOKEN_TYPES} from "@/services/token/token.types";

class TokenService {
    getAccessToken () {
        return Cookies.get(TOKEN_TYPES.ACCESS_TOKEN);
    }

    removeAccessToken () {
        Cookies.remove(TOKEN_TYPES.ACCESS_TOKEN);
    }

    addAccessToken (accessToken: string) {
        Cookies.set(TOKEN_TYPES.ACCESS_TOKEN, accessToken, {
            domain: 'localhost',
            secure: true,
            sameSite: 'strict',
            expires: 1
        });
    }
}

export default new TokenService();