import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./PostObject.css";

export default function PostObject(props) {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [deletePerms, setDeletePerms] = useState(false)

    useEffect(() => {
        if (isAuthenticated == true && user.email == props.user_email) {
            setDeletePerms(true)
        }
    }, [user])

    const handleClick = (e) => {
        const payload = {
            session_id: props.session_id
        }


        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('http://localhost:8000/deletesession', JSON.stringify(payload), customConfig)
    }

    const createCommitment = (e) => {
        const payload = {
            user_email: user.email, 
            session_id: props.session_id
        }

        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log(JSON.stringify(payload))

        axios.post("http://localhost:8000/commit", JSON.stringify(payload), customConfig)
            .then((response) => {
                console.log(response);
            })
    }


    return (
        <div>
            <div>
                <div key={props.session_id} class = "post-object-container">
                    <p>User Email: {props.user_email}</p>
                    <p>Game Played: {props.game_played}</p>
                    <p>Time: {props.time}</p>
                    <p>Additional Info: {props.additional_info}</p>
                    {
                        deletePerms === false ? <p></p> : <div><button onClick={handleClick}>Press to delete this post</button> <br /></div>
                    }
                    <button onClick={createCommitment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Create commitment</button> <br />
                    <a href={"/session/" + props.session_id}>See commited players</a>
                </div>
            </div>
        </div>
    )
}