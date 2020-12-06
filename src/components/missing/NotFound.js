import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

export default function NotFound() {
    
    return (
        <NFStyle>
            <section>
                <Title size='4em'>404</Title>
                <div />
                <Title size='1.4em'>Page not found</Title>
            </section>            
            <Title size='1.2em'>Opps! Looks like this page doesn't exist</Title>
        </NFStyle>
    );
}

const showUp = (direct) => keyframes`
    0% {
        opacity: 0;
        transform: translateX(${direct});
    }
    100% {

    }
`;

const Title = styled.p`
    font-size: ${props => props.size};
    font-weight: 200;
`;

const NFStyle = styled.div`

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-weight: 200;

    section {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            width: 1px;
            height: 8vw;
            background: linear-gradient(to bottom, transparent 2%, rgba(130, 131, 134, 1) 50%, transparent 98%);
            border: none;
            margin: 0 2em;
        }

        ${Title}:first-child {
            animation: ${showUp('-5vw')} 400ms linear;    
        }

        ${Title}:nth-child(3) {
            animation: ${showUp('5vw')} 400ms linear;    
        }

    }

    ${Title} {
        padding: 1em 0;
    }
`;