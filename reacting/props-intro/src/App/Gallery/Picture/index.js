import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

function Picture(props) {
    let parentStyles = {
        backgroundImage: `url(${props.backgroundUrl})`
    }
    return (
        <div className="picture-wrapper" style={parentStyles}>
            <h5>{props.caption}</h5>
            <p>{props.author}</p>
            <p>{props.somethingRandom}</p>
        </div>
    )
}

export default Picture;

Picture.propTypes = {
    backgroundUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}
Picture.defaultProps = {
    backgroundUrl: "https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg",
    author: "DEFAULT",
    caption: "DEFAULT",
    somethingRandom: "DAFGADFGIADHFVAIDFHVOUSFHVSUFDV"
}