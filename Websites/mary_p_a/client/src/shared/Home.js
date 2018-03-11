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
    font-size: 9vw;
`;
const Subtitle = styled.h3`
    font-size: 4vw;
    text-align: center;
   
`;
const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    
`;

function Home() {
    return (
        <Grid id="home" >
            <div>
                {/* <Videocont>
                    <Video video autobuffer loop autoPlay>
                        <source src={Typing} type="video/mp4" />
                    </Video>
                </Videocont> */}
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
