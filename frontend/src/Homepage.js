import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import PostObject from "./PostObject";
import "./Homepage.css";
import Menubar from "./Menubar";

export default function Homepage() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/session').then(res => {
      setData(res.data)
    })
  }, [])

    return (
      <div>
          <Menubar />
          <div class = "centered-container">
            {data.map(session => (
            <PostObject
                session_id = {session.session_id}
                user_email = {session.user_email}
                game_played = {session.game_played}
                time = {session.time}
                additional_info = {session.additional_info}
            />
          ))}
        </div>
      </div>
      );
}