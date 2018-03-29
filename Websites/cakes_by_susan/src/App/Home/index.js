import React, { Component } from 'react';
import './Home.css';
import styled from 'styled-components';
import Image1 from '../../images/1.jpg';
import Image2 from '../../images/2.jpg';
import Image3 from '../../images/3.jpg';
import Image4 from '../../images/4.jpg';
import Image5 from '../../images/5.jpg';
import Image6 from '../../images/6.jpg';
import Image7 from '../../images/7.jpg';
import Image8 from '../../images/8.jpg';
import Image9 from '../../images/9.jpg';

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
(document).ready(function () {
    ('.photos').slick({
        // arrows: true,
        dots: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 1500,
        // centerMode: true,
        // centerPadding: 500px,
        fade: true
    })
});

function Home(props) {
    return (
        <div className='homeDivBox'>
            <Overlay>
                <Title>
                    <Name className='main_title'>The Sue Palmer Experience</Name>
                    <Subtitle className="subName">-Sue Palmer</Subtitle>
                </Title>
            </Overlay>
            <div className="photos">
                <div>
                    <img className='pix' src={Image1} />
                </div>
                <div>
                    <img className="pix" src={Image2} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image3} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image4} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image5} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image6} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image7} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image8} alt="" />
                </div>
                <div>
                    <img className="pix" src={Image9} alt="" />
                </div>
            </div>
            <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
            <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
            <script type="text/javascript" src="slick/slick.min.js"></script>

            {/* <script type="text/javascript">
                $(document).ready(function () {
                    $('.photos').slick({
                        // arrows: true,
                        dots: true,
                        autoplay: true,
                        adaptiveHeight: true,
                        autoplaySpeed: 1500,
                        // centerMode: true,
                        // centerPadding: 500px,
                        fade: true
                    })
                });
    </script> */}
        </div>
    )
}

export default Home

