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

// onNextClick() {
//     if(this.state.activeIndex < 4){
//         this.setState({activeIndex: this.state.activeIndex +1});
//     } else {
//         this.setState({activeIndex: 0})
//     }
// }


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
    }
    onNextClick() {
        if (this.state.activeIndex < 4) {
            this.setState({ activeIndex: this.state.activeIndex + 1 });
        } else {
            this.setState({ activeIndex: 0 })
        }
    }

    onPrevClick() {
        if (this.state.activeIndex > 0) {
            this.setState({ activeIndex: this.state.activeIndex - 1 });
        } else {
            this.setState({ activeIndex: 4 })
        }
    }
    render() {
        let sliderStyle = {
            transform: `translateX(${this.state.activeIndex * -110}%)`,
            transition: '0.2s'
        }
        return (
            <div className='container'>
                <Overlay>
                    <Title>
                        <Name className='main_title'>The Sue Palmer Experience</Name>
                        <Subtitle className="subName">-Sue Palmer</Subtitle>
                    </Title>
                </Overlay>
                <div className="sliderwrap">
                    <div className='buttons'>
                        <button onClick={this.onPrevClick}>◀</button>
                        <button onClick={this.onNextClick}>▶</button>
                    </div>
                    <ol className='slide-container' style={sliderStyle}>
                        <li key={0}>{}</li>
                        <li key={1}>{}</li>
                        <li key={2}>{}</li>
                        <li key={3}>{}</li>
                        <li key={4}>{}</li>
                    </ol>
                    {/* <ol className='slide-container' style={sliderStyle}>
                        <li key={1}>{}</li>
                    </ol>
                    <ol className='slide-container' style={sliderStyle}>
                        <li key={2}>{}</li>
                    </ol>
                    <ol className='slide-container' style={sliderStyle}>
                        <li key={3}>{}</li>
                    </ol>
                    <ol className='slide-container' style={sliderStyle}>
                        <li key={4}>{}</li>
                    </ol> */}
                    {/* <button onClick={this.onNextClick}>▶</button> */}
                </div>
                {/* <div className="photos">
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
                </div> */}
            </div>
        )
    }
}

