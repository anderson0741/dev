import React, { Component } from "react";
import "./index.css";

function Header(props) {
    return (
        <header>
            <h1>Title</h1>
            <h3>Sub Title</h3>
            <nav>
                <a href="https://www.iaai.com/Vehicle?itemID=26888477&RowNumber=10&loadRecent=True">Audi S4</a>
                <a href="google.com">Google</a>
                <a href="facebook.com">facebook</a>
            </nav>
        </header>
    )
}

export default Header;