import React, { Children } from 'react';
import styled, { keyframes } from 'styled-components';
import { devicesMin, devicesMax } from '../../breakpoints/breakpoints';

import Context from '../../context/AppContext';

export default function MenuLogo({children}) {

    const { showSideBar } = React.useContext(Context.SideBarContext);
    
    return (
        <MenuLogoStyle showSideBar={showSideBar}>
            {children}
        </MenuLogoStyle>
    );
}

const MenuLogoStyle = styled.div`

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        font-size: 1.2em;
        line-height: 1.5;
        font-weight: 600;
        height: 45px;
        color: #fff;
        margin: 30px 30px 0px 30px;
        padding: 0;

        @media ${devicesMax.tablet} {
            
            ${props => !props.showSideBar ? ` 
                margin: 10px auto;         
                & > :not(:first-child) {
                    display: none; 
                }
            ` : null}                          
        }
`;