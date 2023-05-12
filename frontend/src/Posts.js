import React from "react";

const Posts = (props) => {
    let colors = ["#FFD606", "#D6F5FF", "#D9DDFF", "#00FFFF", "#D3FFCE", "#FF1493"]
    let points = ["100", "200", "300"]

    return (
        <div className="posts-contrainer">
            <div className = "posts-name"> {props.postsName} </div> 
            { 
                points.map((point) => {
                    return (
                        <div className = "point-value" style={{backgroundColor: colors[props.i % colors.length]}}>
                            {point}
                        </div>
                    )
                })
            }
        </div>
    )   
}

export default Posts