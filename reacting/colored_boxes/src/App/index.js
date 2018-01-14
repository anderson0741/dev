import React, {Component} from "react";
import Content from './Content';

import './index.css';

function App(props) {
    return (
        <div>
            <h1>Welcome!</h1>
            <Content />
            <style>
                @import url('https://fonts.googleapis.com/css?family=Coiny|Londrina+Shadow');
            </style>
        </div>
    )
}

export default App;
