import React, { Component } from 'react';
import './Home.css';
import styled from 'styled-components';
import Image1 from '../images/About.JPG';
import Image2 from '../images/contact.png';
import Images3 from '../images/Screen Shot 2018-03-12 at 7.39.37 PM.png';
import Images4 from '../images/union.jpg';

const Overlay = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    color: white;
    top: 0;
`;

const Title = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 /3;
    justify-content: center;
`;

const Name = styled.h1`
    font-size: 7vw;
    text-shadow: 3px 3px black;
`;

const Subtitle = styled.h3`
    font-size: 4vw;
    text-align: center;
    text-shadow: 3px 3px black;
`;

// var slideIndex = 1;
// showDivs(slideIndex);

// export function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// export function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
// probably change all this to a regular page, non react
function Home(props) {
    return (
        <div className='homeDivBox'>
            <Overlay>
                <Title>
                    <Name className='main_title'>The Sue Palmer Experience</Name>
                    <Subtitle className="subName">-Sue Palmer</Subtitle>
                </Title>
            </Overlay>
            {/* <h2 class="w3-center">Manual Slideshow</h2>
            <div class="w3-content w3-display-container">
                <img class="mySlides" src={Image1} style="width:100%" />
                <img class="mySlides" src={Image2} style="width:100%" />
                <img class="mySlides" src={Images3} style="width:100%" />
                <img class="mySlides" src={Images4} style="width:100%" />

                <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            </div> */}
        </div>
    )
}

export default Home

