import React, {Component} from "react";
import './index.css';

function Boxes(props) {
    let {brand, model, year, engine, backgroundColor, color} = props;
    let style1 = {backgroundColor: backgroundColor, color: color};
    return (
        <div className="boxes">
            <h2>{brand}</h2>
            <h2>{model}</h2>
            <h4>{year}</h4>
            <h4>{engine}</h4>
        </div>
    )
}

export default Boxes;
