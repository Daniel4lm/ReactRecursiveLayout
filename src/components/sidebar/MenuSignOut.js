import React from 'react';
import styled, { keyframes } from 'styled-components';
import { devicesMin, devicesMax } from '../../breakpoints/breakpoints';

import Context from '../../context/AppContext';

export default function SignOut({children}) {

    const { showSideBar } = React.useContext(Context.SideBarContext);
    
    return (
        <SignOutStyle showSideBar={showSideBar}>
            {children}
        </SignOutStyle>
    );
}

const SignOutStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 500;
    height: max-content;
    color: #fff;
    margin-top: 40px;
    /*margin: 40px 20px 0px 20px;*/
    padding: 0;

    & > :first-child {
        padding: 0.2em;
        display: none; 
    }

    & > :first-child:hover {
        border-radius: 0.2em;
        background-color: rgba(203, 207, 214, 0.2); 
    }
    /*
    & > :nth-child(2) {
        background-color: rgba(49, 47, 47, 0.8);
        border: 1px solid rgb(117, 114, 114);
        border-radius: 0.1em;
        padding: 0.2em;
    }*/

    @media ${devicesMax.tablet} {

        ${props => !props.showSideBar ? ` 
            & > :first-child {
                display: flex; 
            }            
            & > :not(:first-child) {
                display: none; 
            }
        ` : null}          
    }
`;