import React, {Component} from "react";
import Boxes from './Boxes';

import './index.css';

function Content(props) {
    let data = [
        {
            brand: "Chevrolet",
            model: "Corvette Z06",
            year: 2017,
            engine: "LT4",
            color: "black",
            backgroundColor: "red"
        },
        {
            brand: "Chevrolet",
            model: "Camaro ZL1",
            year: 2017,
            engine: "LT4",
            color: "black",
            backgroundColor: "blue"
        },
        {
            brand: "Cadillac",
            model: "CTS-V",
            year: 2017,
            engine: "LT4",
            color: "black",
            backgroundColor: "green"
        },
        {
            brand: "Ford",
            model: "GT",
            year: 2005,
            engine: "5.4L",
            color: "black",
            backgroundColor: "yellow"
        },
        {
            brand: "Pontiac",
            model: "Trans Am",
            year: 1999,
            engine: "LS6",
            color: "black",
            backgroundColor: "black",
            color: "white"
        },
        {
            brand: "Chevrolet",
            model: "Corvette",
            year: 2009,
            engine: "LS9",
            color: "black",
            backgroundColor: "purple"
        },
        {
            brand: "Chevrolet",
            model: "Camaro",
            year: 1968,
            engine: "LS6 454",
            color: "black",
            backgroundColor: "orange"
        },
        {
            brand: "Chevrolet",
            model: "Chevelle",
            year: 1970,
            engine: "396",
            color: "black",
            backgroundColor: "gray"
        },
        {
            brand: "Ford",
            model: "Mustang",
            year: 1967,
            engine: "5.0",
            color: "black",
            backgroundColor: "silver"
        },
        {
            brand: "Chevrolet",
            model: "Camaro Z/28",
            year: 1969,
            engine: "302",
            color: "black",
            backgroundColor: "red"
        },
    ]
    return (
        <div className="content-wrapper">
            {data.map((cars) => {
                return <Boxes {...cars}></Boxes>
            })}
        </div>
    )
}

export default Content;
