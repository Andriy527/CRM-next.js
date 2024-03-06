'use client'

import {useState} from "react";
import LoginForm from "@/components/form/login";
import RegisterForm from "@/components/form/register";
import Card from "@mui/material/Card";
import TokenService from "@/services/token/token.service";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Card variant="outlined" sx={{p: '30px', maxWidth: 'fit-content', mx: 'auto'}}>
            {isLogin
            ? <LoginForm setIsLogin={setIsLogin} />
            : <RegisterForm setIsLogin={setIsLogin} />}
        </Card>
    );
};

export default Auth;