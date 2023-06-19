import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./CreateSessionForm.css"

function CreateSessionForm() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [gamedPlayed, setGamePlayed] = useState("")
    const [additionalText, setAdditionalText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const datetimeValue = new Date();
        const formattedDatetime = datetimeValue.toISOString();

        const payload = {
            email: user.email,
            game_played: gamedPlayed,
            time: formattedDatetime,
            additional_info: additionalText
        }

        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('http://localhost:8000/session', JSON.stringify(payload), customConfig)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

        console.log(payload)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={gamedPlayed}
                    placeholder="Enter the game being played"
                    onChange={e => setGamePlayed(e.target.value)}
                /> <br />
                <input
                    type="text"
                    value={additionalText}
                    placeholder="Enter additional text"
                    onChange={e => setAdditionalText(e.target.value)}
                />
                <button type='submit'>Click to submit</button>
            </form>
        </div>
    )
}

export default CreateSessionForm