import React from "react";

const PopUp = (props) => {

    return(
        <div className="pop-up">
            <div className="pop-up-content">
            <p>Create Posts</p>
                <input id="posts-text" type="text"></input>
                <input id="posts-actual-text" type="text"></input>
                <button className="submit" 
                onClick={()=>{
                    props.setAddNew(!props.addnew)
                    console.log(document.getElementById("posts-text").value)
                    console.log(document.getElementById("posts-actual-text").value)
                    props.setPosts([
                        ...props.posts, props.text, 
                        document.getElementById("posts-text").value,
                        document.getElementById("posts-actual-text").value
                    ])
                }}>Ok</button>
            </div>
        </div>
    )
}

export default PopUp;