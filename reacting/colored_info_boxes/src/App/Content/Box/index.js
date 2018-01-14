
import React, {Component} from "react";
import "./index.css";

function Box(props) {
    let {name, status, bio, backgroundColor, color} = props;
    let style1 = {backgroundColor: backgroundColor, color: color}
    return (
        <div className="cards" style = {style1}>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <p>{bio}</p>
        </div>
    )
}

export default Box;