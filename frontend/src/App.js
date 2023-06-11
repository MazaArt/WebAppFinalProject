import './App.css';
import {useState} from "react"
import LoginButton from './LoginButton';
import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react";
import CreateSessionForm from './CreateSessionForm';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Menubar from './Menubar';
import CommittedPlayers from './CommittedPlayers';

function App() {
  const [addnew, setAddNew] = useState(false)
  const [posts, setPosts] = useState([])

  const handleClick = (e) => {
      setAddNew(!addnew)
  }
  
  const { user, isAuthenticated, isLoading } = useAuth0();

  if(isAuthenticated == false && isLoading == false) {
    console.log("User is not authenticated")
  }
  else if(isAuthenticated == true && isLoading == false) {
    console.log("User is authenticated")
  }

  return (
    <Router>
      <div className="lobby">
        <Menubar />
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/create' element={<CreateSessionForm />}></Route>
          <Route path ='/session/:id' element={<CommittedPlayers />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

