import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./Menubar.css";

export default function Menubar() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [email, setEmail] = useState("")

  useEffect(() => {
    if (isAuthenticated === false && isLoading === false) {
      console.log("User is not authenticated");
    } else if (isAuthenticated === true && isLoading === false) {
      setEmail(user.email);
    }
  }, [isAuthenticated, isLoading]);


  return (
    <div class = "menubar">
      <ul>
        <li>{email}</li>
        <li><LogoutButton /></li>
        <li><Link to="/">
          <button>Home</button></Link></li>
        <li><a href="/create" class = "create-tt">Create</a></li>
      </ul>
    </div>
  )
}