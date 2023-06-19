import './App.css';
import React, { useState } from 'react';
import Posts from './Posts';
import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react";
import CreateSessionForm from './CreateSessionForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Menubar from './Menubar';
import CommittedPlayers from './CommittedPlayers';
import SignIn from './SignIn'

function App() {
  const [addnew, setAddNew] = useState(false)
  const [posts, setPosts] = useState([])

  const handleClick = (e) => {
    setAddNew(!addnew)
  }

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated == false && isLoading == false) {
    console.log("User is not authenticated")
    return (
      <Router>
        <Routes>
          <Route exact path='/signin' element={<SignIn />}></Route>
        </Routes>
      </Router>
    );

  }
  else if (isAuthenticated == true && isLoading == false) {
    console.log("User is authenticated")
  }

  return (
    <div className="lobby">
      <h1>VideoGame Lobby</h1>
      <Router>
        <Menubar />
        <Routes>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/create' element={<CreateSessionForm />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/session/:id' element={<CommittedPlayers />}></Route>
        </Routes>

        {/* <div className="posts-container">
          {posts.map((post) => (
            <Posts
              key={post.id}
              creator={post.creator}
              title={post.title}
              paragraph={post.paragraph}
              joinedPeople={post.joinedPeople}
              onJoin={() => {
                // Logic to handle join button click for each post
              }}
            />
          ))}
        </div> */}
      </Router>
    </div>
  );
}

export default App;

