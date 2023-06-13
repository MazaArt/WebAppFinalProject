import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function CommittedPlayers() {
    const { id } = useParams()
    const [ players, setPlayers ] = useState([])

    useEffect(() => {
        const url = "http://localhost:8000/commited_players/" + id
        
        axios.get(url)
        .then((response) => {
            // setPlayers(response)
            console.log(players)
            setPlayers(response.data)
          }, (error) => {
            console.log(error);
          });
    }, [])

    return(
        <div>
            <ul>
                {players.map(players => (
                    <li>{players.user_email}</li>
                ))}
            </ul>
        </div>
    )
}