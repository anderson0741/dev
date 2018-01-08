import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Pet from "./Pet";

function Friend(props) {
    // let parentStyles = {
    //     backgroundImage: `url(${props.backgroundUrl})`
    // }
    return (
        <div>
            <div className="friend">
                <h5>{props.name}</h5>
                <p>{props.age}</p>
            </div>

            <div className="pet">
                {props.pets.map((pet) => {
                    return <Pet {...pet}></Pet>
                })
                }
            </div>
        </div>
    )
}

export default Friend;

// Friend.propTypes = {
//     backgroundUrl: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     caption: PropTypes.string.isRequired
// }
// Friend.defaultProps = {
//     backgroundUrl: "https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg",
//     author: "DEFAULT",
//     caption: "DEFAULT",
//     somethingRandom: "DAFGADFGIADHFVAIDFHVOUSFHVSUFDV"
// }