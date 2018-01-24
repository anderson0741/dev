import React from 'react';
import Images from './Images';

import { Switch, Route, Link } from "react-router-dom";

function App(props) {
    return (
        <div className='app-wrap'>
            <h1 className="swan">Ron Swanson Quotes</h1>
            <div className="mainWrap">
                <Images />
            </div>
        </div>
    )
}

export default App
