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
                    <h1 className="various_projects consTitle">Projects</h1>
                    <a href="/level_up_home" className="main_shopCars cons1">
                        <h1 className='littleTitle'>Level Up Cars</h1>
                        <p className='sub'>Local Dealership</p>
                    </a>
                    <a className="main_aboutSelector cons1" href="/all_about_me">
                        <h1 className='littleTitle'>All about ME</h1>
                        <p className='sub'>Esthetics Web Page</p>
                    </a>
                    <a className="main_aboutSelf consTitle" href="/about">
                        <h1 className='otherTitle'>About</h1>
                    </a>
                    <div className="misc_small consTitle">
                        <h1 className="subProjects otherTitle">Misc Small React CSS/JS</h1>
                        <p className="subProjects sub">-Images only</p>
                    </div>
                    <a href="/track" className="track cons1"></a>
                    <a href="/travel" className="travel cons1"></a>
                    <a href="https://timer-for-portfolio.herokuapp.com/end.html" className="clock cons1"></a>
                    <a href="https://calculator-for-portfolio.herokuapp.com/calc.html" className="calc cons1"></a>
                    <a href="/starwarsapi" className="starw cons1"></a>
                    <a href="/" href="/contact" className="main_location consTitle">
                        <h1 className='otherTitle'>Contact</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
