import './App.css';
import React, { useState } from 'react';
import Posts from './Posts';
import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react";
import CreateSessionForm from './CreateSessionForm';
import Homepage from './Homepage';
import Menubar from './Menubar';
import CommittedPlayers from './CommittedPlayers';
import Signin from './Signin'
import { BrowserRouter as Router,Routes, Route, Link, useLocation } from 'react-router-dom';
import {useNavigate} from "react-router"

function App() {
  const [addnew, setAddNew] = useState(false);
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const handleClick = (e) => {
    setAddNew(!addnew);
  };

  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated === false && isLoading === false) {
    // navigate('/signin');
    console.log('user is not authenticated')
    console.log(location.pathname)
  } else if (isAuthenticated === true && isLoading === false) {
    console.log('User is authenticated');
  }

  return (

      <div className="lobby">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreateSessionForm />} />
          <Route path="/session/:id" element={<CommittedPlayers />} />
          <Route path="/signin" element={<Signin />} />
          {!isAuthenticated && !isLoading && location.pathname == '/' && navigate('/signin')}
        </Routes>
      </div>

  );
}

export default App;

