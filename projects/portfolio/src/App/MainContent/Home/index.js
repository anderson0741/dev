import React from 'react';
import './Home.css';
import styled from 'styled-components';

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

function Home(props) {
    return (
        <div className="main_outerHomeDiv">
            <div className='main_homeDivBox'>
                <Overlay>
                    <Title>
                        <Name className='main_tag'>Lawrence Colton Anderson</Name>
                        <Subtitle className="webD">-Web Developer</Subtitle>
                    </Title>
                </Overlay>
                <div className="main_selector">
                    <h1 className="various_projects main_homeBox littleTitle">Projects</h1>
                    <a href="/level_up_home" className="main_shopCars main_homeBox">
                        <h1 className='littleTitle'>Level Up Cars</h1>
                        <p className='sub'>Local Dealership</p>
                    </a>
                    <a className="main_aboutSelector main_homeBox" href="/all_about_me">
                        <h1 className='littleTitle'>All about ME</h1>
                        <p className='sub'>Esthetics Web Page</p>
                    </a>
                    <a className="main_aboutSelf main_homeBox" href="/about">
                        <h1 className='otherTitle'>About</h1>
                    </a>
                    <div className="misc_small main_homeBox">
                        <h1 className="subProjects otherTitle">Misc Small React CSS/JS</h1>
                        <p className="subProjects sub">-Images only</p>
                    </div>
                    <a href="/track" className="track main_homeBox"></a>
                    <a href="/travel" className="travel main_homeBox"></a>
                    <a href="/clock" className="clock main_homeBox"></a>
                    <a href="/starwarsapi" className="starw main_homeBox"></a>
                    <a href="/" href="/contact" className="main_location main_homeBox">
                        <h1 className='otherTitle'>LOCATION</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
