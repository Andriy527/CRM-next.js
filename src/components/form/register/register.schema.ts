import * as yup from "yup";

export const registerSchema = yup.object({
    email: yup.string()
        .required('Email is required')
        .email('Please write a valid email'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be more than 6 symbols'),
    confirmPassword: yup.string()
        .required('Reset password is required')
        .oneOf([yup.ref('password')], 'Passwords are not mutches')
})