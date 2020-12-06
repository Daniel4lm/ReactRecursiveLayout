import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import RenderRoutes from '../../routes/routing';

import { devicesMin, devicesMax } from '../../breakpoints/breakpoints';

import Context from '../../context/AppContext';
import { Switch } from 'react-router-dom';

export default function Header({ props, children }) {

    const { dataList, selectedItems, updateItems } = useContext(Context.AppContext);

    return (
        <HeaderStyle>
            
            <Switch>
                <RenderRoutes routes={dataList} container='header' />
            </Switch>
            {children}
        </HeaderStyle>
    );
}//  

const translateAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-2vw);
    }
`;

const HeaderStyle = styled.div`

    grid-area: head;
    width: 100%;
    /*box-shadow: 1px 1px 1px 0 #dee1e6;*/
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2);
    display: flex;
    flex-flow: row ;
    justify-content: flext-start;
    align-items: center;
    padding: 1vw;
    font-size: calc(0.8em + 0.5vw);
    font-weight: 200;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    text-decoration: none;
    outline: none;

    & > * {
        margin: 0 0.5em;
        animation: ${translateAnimation} 400ms ease-out;
    }

    @media only screen and ${devicesMax.mobileM} {
        justify-content: space-between;
        & > :last-child {
            margin: 0 2em;
        }
    }
`;