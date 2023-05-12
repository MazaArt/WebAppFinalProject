import React from "react";

const PopUp = (props) => {

    return(
        <div className="pop-up">
            <div className="pop-up-content">
                <p>Create Posts</p>
                <input id="posts-text" type="text"></input>
                <button className="submit" 
                onClick={()=>{
                    props.setAddNew(!props.addnew)
                    console.log(document.getElementById("posts-text").value)
                    props.setPosts([
                        ...props.posts,
                        document.getElementById("posts-text").value
                    ])
                }}>Ok</button>
            </div>
        </div>
    )
}

export default PopUp;