import React, {Component} from "react";
import "./index.css";

function Pet(props){
    return (
        <div className="pet-list">
            <p>{props.name}</p>
            <p>{props.breed}</p>
        </div>
    )
}

export default Pet;