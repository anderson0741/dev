import React, { Component } from 'react';
import styled from 'styled-components';

// import './Home.css';

const Overlay = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    color: white;
`;
const Title = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 /3;
    justify-content: center;
`;
const Name = styled.h1`
    font-size: 10vw;
    color: rgb(145, 137, 137);
    text-shadow: 3px 3px 3px black;
`;
const Subtitle = styled.h3`
    font-size: 5vw;
    text-align: center;
   color: rgb(145, 137, 137);
   text-shadow: 3px 3px 3px black;
`;
const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    
`;

function Home() {
    return (
        <Grid id="home" >
            <div>
                <Overlay>
                    <Title>
                        <Name>Mary Anderson</Name>
                        <Subtitle>Master Esthetician</Subtitle>
                    </Title>
                </Overlay>
            </div>
        </Grid>
    );
}

export default Home;
