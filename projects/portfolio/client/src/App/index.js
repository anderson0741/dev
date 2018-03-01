import React, { Component } from 'react'

// import Nav from '../shared/Nav/Nav'
import Content from '../shared/Content';

function App(props) {
    return (
        <div>
            <h1>Welcome to {props.name}</h1>
            <h2>Founded by {props.founder}</h2>
            <Content></Content>
        </div>
    )
}

export default App;