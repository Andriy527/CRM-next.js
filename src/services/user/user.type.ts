import {Iuser} from "@/types";

interface IuserResponse extends Iuser {
    tasks: any[]
}

export interface IstatisticItem {
    label: string,
    value: number
}

export type Tstatistic = IstatisticItem[];

export interface IprofileResponse {
    statistics: Tstatistic
    user: IuserResponse
}