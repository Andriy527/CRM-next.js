import {Iuser} from "@/types";
import {TloginForm} from "@/components/form/form.type";

export type TsignIn = 'login' | 'register';
export interface IauthRespone {
    accessToken: string,
    user: Iuser
}

export interface IsignInParams {
    type: TsignIn,
    data: TloginForm
}