import React, {Component} from "react";
import Content from "./Content";
import "./index.css";

function App(props) {
    
    return (
        <div className="app-wrapper">
            <h1>Welcome to {props.name}</h1>
            <h2>Founded by {props.founder}</h2> 
            <Content></Content>
            <style>
                @import url('https://fonts.googleapis.com/css?family=Coiny|Londrina+Shadow');
            </style>
        </div>
        
    )
}

export default App;