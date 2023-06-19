import React, { useEffect } from 'react';
import './SignIn.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';


const SignIn = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    // Redirect to the root path if the user is authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); // Redirect to the root path (App.js)
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <LoginButton />
        </div>
    );
};

export default SignIn;
