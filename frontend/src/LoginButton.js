import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isAuthenticated) {
    navigate("/"); // Replace "/" with the desired path for your app
  }

  return <button className="loginbutton" onClick={handleLogin}>Log In</button>;
};

export default LoginButton;