import {useQuery} from "@tanstack/react-query";
import UserService from "@/services/user/user.service";

export const useProfileData = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: UserService.getUser
    })
}