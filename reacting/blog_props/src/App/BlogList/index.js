import React, { Component } from 'react'
import "./index.css";

export default class BlogList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="post one">
                        <a href="http://" className="post one dalink">
                            <h2>Man must explore, and this is exploration at its greatest</h2>
                            <h3>Problems look mighty small from 150 miles up</h3>
                        </a>
                        <p className="date">Posted by <a href="http://">Start Bootstrap</a> on September 24, 2017</p>
                    </div>
                    <div className="post two">
                        <a href="http://" className="post two dalink">
                            <h2>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2>
                            <h3></h3>
                        </a>
                        <p className="date">Posted by <a href="http://">Start Bootstrap</a> on September 18, 2017</p>
                    </div>
                    <div className="post three">
                        <a href="http://" className="post three dalink">
                            <h2>Science has not yet mastered prophecy</h2>
                            <h3>We predict too much for the next year and yet far too little for the next ten.</h3>
                        </a>
                        <p className="date">Posted by <a href="http://">Start Bootstrap</a> on August 24, 2017</p>
                    </div>
                    <div className="post four">
                        <a href="http://" className="post four dalink">
                            <h2>Failure is not an option</h2>
                            <h3>Many say exploration is part of our destiny, but it's actually our duty to future generations.</h3>
                        </a>
                        <p className="date">Posted by <a href="http://">Start Bootstrap</a> on July 8, 2017</p>
                    </div>
                    <div className="olderPosts post">
                        <button className="oldButton">Older Posts →</button>
                    </div>
                </div>
            </div>
        )
    }
}
