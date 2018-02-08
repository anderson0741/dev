import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./index.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Content />
            <Footer></Footer>
        </div>
    )
}

export default App;