import React, { Component } from 'react';
import "./index.css";
import "./images/home-bg.jpg";

export default class Header extends Component {
    render() {
        return (
            <div className="dabody">

                <div className="molinks textColor">
                    <a href="http://">Start Bootstrap</a>
                    <br />
                    <br />
                    <a href="http://">Home</a>
                    <a href="http://">About</a>
                    <a href="http://">Sample Post</a>
                    <a href="http://">Contact</a>
                    </div>
                    <div className="ljst">
                    <h1>Clean Blog</h1>
                    <h3>A Blog Theme by Start Bootstrap</h3>
                </div>
            </div>
        )
    }
}
