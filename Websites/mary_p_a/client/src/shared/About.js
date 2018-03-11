import React from 'react'
import styled from 'styled-components';
import Mary from '../images/Mary.jpg';

const Wrapper = styled.section`
    display: grid;
    color: white;
    background: rgba(135, 97, 67, 0.5);
    height: 100vh;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr ;
    @media (max-width: 420px){
        grid-template-areas:
        'm'
        'c'
    }
    grid-template-areas:
        'm c'
`;
const Main = styled.div`
    grid-area: m;
    align-self: center;
    margin-left: 20px;
   
    @media (max-width: 420px){
        height: 200px;
    }
`;
const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    
`;
const Content = styled.div`
    grid-area: c;
    align-self: center;
    margin-left: 20px;
`;
const Form = styled.form`
    display: grid;
    grid-row-gap: 4px;
    border: none;
    width: 350px;
`;
const Cont = styled.h1`
    font-size: 3vw;
`;
const But = styled.button`
    margin-top: 5px;
    width: 60px;
`;
const StyledInput = styled.input`
    height: 28px;
    width: 100%;
`;
const SubHead = styled.h4`
    margin: 10px;
`;
const TextBox = styled.textarea`
    height: 100px;
    width: 100%;
`;

function About() {
    return (
        <Wrapper id="about">
            <Main>
                <h1>About Me</h1>
                <p>I am an Esthetician.</p>
                <Image src={Mary} alt="Pic of Mary" />
            </Main>
            <Content>
                <div>
                    <Cont>Contact</Cont>
                    <SubHead>Questions?</SubHead>
                    <Form method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <p><StyledInput type="text" name="name" placeholder="Name" /></p>
                        <p><StyledInput type="email" name="email" placeholder="Enter email" /></p>
                        <p><TextBox name="message" placeholder="Your Message" /></p>
                        <p><But type="submit">Send</But></p>
                    </Form>
                </div>
            </Content>
        </Wrapper>
    )
}

export default About
