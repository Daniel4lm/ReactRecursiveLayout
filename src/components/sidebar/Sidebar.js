import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GitHub, User } from 'react-feather';
import { Route, Switch, Link } from 'react-router-dom';

import Context from '../../context/AppContext';

import { devicesMin, devicesMax } from '../../breakpoints/breakpoints';

import SideBarMenu from './Menubar';
import MenuLogo from './MenuLogo';
import MenuSignOut from './MenuSignOut';
import { Spliter } from './Spliter';


export default function SideBar({children}) {

    const { dataList, selectedItems, updateItems, windowSize, toggleBar, hideSideBar, hambRef } = useContext(Context.AppContext);
    const [showSideBar, setShowSideBar] = useState(false);
    const sideBarRef = useRef(null);

    useEffect(() => {
        setShowSideBar(showSideBar => windowSize.width >= 768 ? true : showSideBar);
    }, [windowSize])

    useEffect(() => {

        const closeSideBar = (e) => {           
            
            if (windowSize.width > 768 || !sideBarRef.current || sideBarRef.current.contains(e.target)) {
                return;
            }

            if(hambRef.current && !hambRef.current.isEqualNode(e.target)) {
                hideSideBar();
            }
            
            setShowSideBar(false);            
        }

        document.addEventListener('mousedown', closeSideBar);

        return () => {
            document.removeEventListener('mousedown', closeSideBar);
        }

    }, [windowSize]);

    return (
        <SidebarContainer ref={sideBarRef} showSideBar={showSideBar} toggleBar={toggleBar}
            onClick={() => setShowSideBar(true)}>
            <Context.SideBarContext.Provider value={{ showSideBar }}>                
                <MenuLogo >
                    <GitHub color='rgb(65, 140, 225)' />
                    <span>Rotax;tech</span>
                </MenuLogo>
                <Spliter />
                <SideBarMenu list={dataList}
                    selectedItems={selectedItems}
                //onClick={updateItems} 
                />
                <MenuSignOut>
                    <User size={28} />
                    <NavLinks to='/sign-in'>Sign Out</NavLinks>
                </MenuSignOut>
                <Spliter />

            </Context.SideBarContext.Provider>
        </SidebarContainer>
    );
}

const NavLinks = styled(Link)`
    color: rgb(173, 176, 182);
    transition: all 200ms ease-in-out;

    &:hover {
        color: #fff;
    }
`;

const SidebarContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    /*width: 270px;*/
    background-color: ${props => props.background ? props.background : '#535454'};/*#37373b*/
    color: #fff;
    transition: transform 0.3s ease-in-out;
    z-index: 500;
    

    @media ${devicesMax.mobileM} {
        position: absolute;
            left: 0;
            top: 0;
        ${props => props.toggleBar ? `
            /*display: none;*/
            transform: translateX(-100%);
        ` : `
            transform: translateX(0);
        `}             
    }

    @media ${devicesMax.tablet} {

        ${props => props.showSideBar ? `
            position: absolute;
            left: 0;
            top: 0;
            ${Spliter} {
                opacity: 1;
            }
        ` : `
            ${Spliter} {
                opacity: 0;
            }
        `}        
    }
`;