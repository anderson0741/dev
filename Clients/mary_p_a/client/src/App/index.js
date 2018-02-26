import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from '../Nav/index';
import LeftSideBar from '../SideBars/LeftSideBar';
import RightSideBar from '../SideBars/RightSideBar';
import Home from '../shared/Home';

import './index.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <Nav />
                </div>
                <br />
                <div className="content">
                    <LeftSideBar />
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                    <RightSideBar />
                </div>
            </div>
        )
    }
}
