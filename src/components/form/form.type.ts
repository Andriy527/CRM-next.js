export interface IregisterForm {
    email: string,
    password: string,
    confirmPassword: string
}

export type TloginForm = Omit<IregisterForm, 'confirmPassword'>