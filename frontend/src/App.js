import './App.css';
import {useState} from "react"
import LoginButton from './LoginButton';
import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react";
import CreateSessionForm from './CreateSessionForm';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

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
        <LoginButton />
        <Profile />
        <Routes>
          <Route exact path='/create' element={<CreateSessionForm />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;

