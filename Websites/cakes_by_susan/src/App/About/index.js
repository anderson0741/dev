import React, { Component } from 'react'

export default class AboutDemo extends Component {
    render() {
        return (
            <div>
            <h2 className="w3-center">Manual Slideshow</h2>

<div className="w3-content w3-display-container">
  <img className="mySlides" src={Image1} style="width:100%"/>
  <img className="mySlides" src={Image2} style="width:100%"/>
  <img className="mySlides" src={Image3} style="width:100%"/>
  <img className="mySlides" src={Image4} style="width:100%"/>

  <button className="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button className="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
</div>

            </div>
        )
    }
}
