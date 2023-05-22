import React from "react";

const Posts = (props) => {
    let colors = ["#FFD606", "#D6F5FF", "#D9DDFF", "#00FFFF", "#D3FFCE", "#FF1493"]
    let points = ["100", "200", "300"]

    return (
        <div className="posts-box" style={{ backgroundColor: colors[props.i % colors.length] }}>
            {props.postsName}
            {/* {props.postsText} */}
        </div>
    )   
}

export default Posts