import React, {FC} from 'react';
import {Button, TextField, Typography, FormControl, CircularProgress} from "@mui/material";
import {Iprops} from "@/components/form/register/register.types";
import {useYupValidationResolver} from "@/hooks/useYupValidationResolver";
import {registerSchema} from "@/components/form/register/register.schema";
import {useForm, SubmitHandler} from "react-hook-form";
import {IregisterForm} from "@/components/form/form.type";
import {useAuth} from "@/hooks/useAuth";

const RegisterForm: FC<Iprops> = ({setIsLogin}) => {
    const resolver = useYupValidationResolver(registerSchema);
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IregisterForm>({resolver});
    const {mutate, isPending, error} = useAuth();
    const onSubmit: SubmitHandler<IregisterForm> = (data) => {
        const submitData: IregisterForm = {...data};
        delete submitData.confirmPassword;

        const signInParams = {
            type: 'register',
            data: submitData
        }

        mutate(signInParams);
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl  sx={{display: 'block', padding: 1}}>
                    <TextField label="email" type="email" {...register('email')}/>
                    {errors.email && <Typography variant="caption"  sx={{color: 'red', display: 'block'}}>{errors.email.message}</Typography>}
                </FormControl>
            <FormControl  sx={{display: 'block', padding: 1}}>
                <TextField label="password" type="password" {...register('password')}/>
                {errors.password && <Typography variant="caption"  sx={{color: 'red', display: 'block'}}>{errors.password.message}</Typography>}
            </FormControl>
                <FormControl  sx={{display: 'block', padding: 1}}>
                    <TextField label="confirm password" type="confirmPassword" {...register('confirmPassword')}/>
                    {errors.confirmPassword && <Typography variant="caption"  sx={{color: 'red', display: 'block'}}>{errors.confirmPassword.message}</Typography>}
                </FormControl>
                <FormControl  sx={{display: 'block', padding: 1}}>
                    <Typography variant="caption" onClick={() => setIsLogin(true)}>Have a account? login</Typography>
                </FormControl>
                <FormControl  sx={{display: 'block', padding: 1}}>
                    {
                        isPending
                            ? <CircularProgress/>
                            : <Button type="submit">register</Button>
                    }
                    {error && <Typography variant="caption" sx={{color: 'red', display: 'block'}}>{error.response?.data.message}</Typography>}
                </FormControl>
            </form>
    );
};

export default RegisterForm;