import $auth from "@/api/auth";
import {IprofileResponse} from "@/services/user/user.type";

class UserService {
    async getUser() {
       const response = await $auth.get<IprofileResponse>('/user/profile');

       return response.data;
    }
}

export default new UserService();