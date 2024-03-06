import {useMutation} from "@tanstack/react-query";
import AuthService from "@/services/auth/auth.service";
import {useRouter} from "next/navigation";
import {PAGES_URL} from "@/constants";

export const useLogout = () => {
    const {push} = useRouter();

    return useMutation({
        mutationKey: ['logout'],
        mutationFn: AuthService.logout,
        onSuccess: () => push(PAGES_URL.AUTH)
    })
}