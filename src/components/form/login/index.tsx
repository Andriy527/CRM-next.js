'use client';

import {TextField, Button, FormControl, Typography, CircularProgress} from "@mui/material";
import {FC} from "react";
import {Iprops} from "@/components/form/login/login.types";
import {useForm, SubmitHandler} from "react-hook-form";
import {TloginForm} from "@/components/form/form.type";
import {loginSchema} from "@/components/form/login/login.schema";
import {useYupValidationResolver} from "@/hooks/useYupValidationResolver";
import {useAuth} from "@/hooks/useAuth";

const LoginForm: FC<Iprops> = ({setIsLogin}) => {
    const resolver = useYupValidationResolver(loginSchema)
    const {register, handleSubmit, reset, formState: {errors}} = useForm<TloginForm>({resolver});
    const {mutate, isPending, error} = useAuth();
    const onSubmit: SubmitHandler<TloginForm> = (data) => {
        const signInParams = {
            type: 'login',
            data: data
        }

        mutate(signInParams);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{display: 'block', padding: 1}}>
                <TextField label="email" {...register('email')}/>
                {errors.email && <Typography variant="caption" sx={{color: 'red', display: 'block'}}>{errors.email.message}</Typography>}
            </FormControl>
            <FormControl sx={{display: 'block', padding: 1}}>
                <TextField label="password" type="password" {...register('password')}/>
                {errors.password && <Typography variant="caption" sx={{
                    color: 'red',
                    display: 'block'
                }}>{errors.password.message}</Typography>}
            </FormControl>
            <FormControl sx={{display: 'block', padding: 1}}>
                <Typography variant="caption" onClick={() => setIsLogin(false)}>Dont have a accout? register</Typography>
            </FormControl>
            <FormControl sx={{display: 'block', padding: 1}}>
                {
                    isPending
                    ? <CircularProgress/>
                    : <Button type="submit">login</Button>
                }
                {error && <Typography variant="caption" sx={{color: 'red', display: 'block'}}>{error.response?.data.message}</Typography>}
            </FormControl>
        </form>
    );
};

export default LoginForm;