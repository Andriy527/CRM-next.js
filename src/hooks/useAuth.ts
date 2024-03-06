import {useMutation} from "@tanstack/react-query";
import authService from "@/services/auth/auth.service";
import {useRouter} from "next/navigation";
import {IsignInParams, TsignIn} from "@/services/auth/auth.type";
import {PAGES_URL} from "@/constants";

export function useAuth() {
    const {push} = useRouter();

    return useMutation({
        mutationKey: ['auth'],
        mutationFn: async (data: IsignInParams) => await authService.signIn(data),
        onSuccess: () => push(PAGES_URL.CABINET)
    })
}