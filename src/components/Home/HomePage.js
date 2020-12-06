import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

export default function HomePage() {

    return (
        <HomeStyle>
            <h2>Welcome to Rotax Web Page</h2>
            <p>Our company provides a specialy services according to your needs</p>
        </HomeStyle>
    );
}

const load = keyframes`
    0% {
        opacity: 0;
    }
`;

const HomeStyle = styled.div`

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1vw;
    text-decoration: none;
    outline: none;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    animation: ${load} 600ms ease-out;

    h2 {
        padding: 1em 0;
        color: #828386;
        /*text-shadow: 0 0 2px #000;*/
        font-size: calc(1em + 1vw);
    }

    p {
        padding: 1em 0;
        color: #828386;
        font-size: calc(1em + 0.5vw);
        font-weight: 200; /*lighter;*/
    }
`;