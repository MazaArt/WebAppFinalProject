import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import { useState, useEffect } from "react"

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
        <div>
            <ul>
                <li>{email}</li>
                <li><LogoutButton /></li>
                <li><a href="/create">Create</a></li>
            </ul>
        </div>
    )
}