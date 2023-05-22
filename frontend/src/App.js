import './App.css';
import {useState} from "react"
import PopUp from "./PopUp"
import Posts from './Posts';

function App() {
  const [addnew, setAddNew] = useState(false)
  const [posts, setPosts] = useState([])

  const handleClick = (e) => {
      setAddNew(!addnew)
  }
  
  return (
    <div className="lobby">
      <h1>VideoGame Lobby</h1>

      <button className="add-new" onClick={handleClick}>+</button>
      {
        addnew ? <PopUp 
                    addnew={addnew} 
                    setAddNew={setAddNew}
                    posts={posts}
                    setPosts={setPosts}/> : null
      } 

      <div className="posts-container">
        {
          posts.map((post, text, i) => {
            // return <Posts postsName={post} postsText = {text} i = {i}/>
            return <Posts postsName={post} i = {i}/>
          })
        }
      </div>

    </div>
  );
}

export default App;

