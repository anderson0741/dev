import React, {Component} from "react";
import "./index.css";

function Picture(props){
    let parentStyles = {
        backgroundImage: `url(${props.backgroundUrl})`
    } 
    return (
        <div className="picture-wrapper" style={parentStyles}>
            <h5>{props.caption}</h5>
            <p>{props.author}</p>
        </div>
    )
}

export default Picture;