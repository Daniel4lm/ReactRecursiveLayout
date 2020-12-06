import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ChevronUp, ChevronDown } from 'react-feather';

import { devicesMin, devicesMax } from '../../breakpoints/breakpoints';

import Context from '../../context/AppContext';


function BarItem({ item, selectedItems, hasItems, isSelected, onClick, depth, depthStep, fontStep }) {

    const { label, to, Icon, ...rest } = item;

    const { updateItems, windowSize } = useContext(Context.AppContext);
    const { showSideBar } = React.useContext(Context.SideBarContext);

    console.log(showSideBar)

    const handleItemClick = (to) => {       

        if (selectedItems[to]) {
            delete selectedItems[to];
        } else {
            if (hasItems) {
                selectedItems[to] = true;
            } else {
                selectedItems = {};
                selectedItems[to] = true;
            }
        }
        updateItems(selectedItems);
    }

    const renderItem = () => {

        return (
            <SidebarMenuItem depth={depth} depthStep={depthStep} key={label}
                isSelected={isSelected} hasItems={hasItems}
                onClick={() => handleItemClick(to)} {...rest} >

                {Icon && <Icon size={20} strokeWidth={1.0} />}
                <SidebarMenuItemLabel fontStep={fontStep} showSideBar={showSideBar}>
                    {label}
                </SidebarMenuItemLabel>
                {(hasItems && isSelected) ? <Direction><ChevronUp size={18} /></Direction> :
                    (hasItems && !isSelected) ? <Direction><ChevronDown size={18} /></Direction> : null}

            </SidebarMenuItem >
        );
    }

    return (
        <>
            {to && showSideBar ?
                <StyledLink to={to}>
                    {renderItem()}
                </StyledLink>
                :
                renderItem()
            }
        </>
    );
}

BarItem.propTypes = {
    list: PropTypes.array,
    selectedItems: PropTypes.object,
    hasItems: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    depth: PropTypes.number,
    depthStep: PropTypes.number,
    fontStep: PropTypes.number
}

export default function SideBarMenu({ list, selectedItems, onClick, depthStep = 10, depth = 1, fontStep = 0 }) {

    const { showSideBar } = React.useContext(Context.SideBarContext);


    return (
        <SidebarMenu showSideBar={showSideBar}>
            {list.map((item, ind) => {
                const { label, to, items } = item;
                const hasItems = items && items.length > 0;
                const isSelected = selectedItems[to];
                return (
                    <React.Fragment key={`${label}${to}`}>
                        <BarItem item={item} hasItems={hasItems} isSelected={isSelected} selectedItems={selectedItems}
                            depth={depth} depthStep={depthStep} fontStep={fontStep} />
                        {hasItems && isSelected && (
                            <SideBarMenu list={items} selectedItems={selectedItems}
                                depth={depth + 1} depthStep={depthStep} fontStep={fontStep + 0.1} />
                        )}
                    </React.Fragment>
                )
            })}
        </SidebarMenu>
    );
}

SideBarMenu.propTypes = {
    list: PropTypes.array.isRequired,
    selectedItems: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    depth: PropTypes.number,
    depthStep: PropTypes.number,
    fontStep: PropTypes.number
}

const showAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
    }
`;

const SidebarMenu = styled.ul`
    display: flex;
    align-items: left;
    flex-flow: column nowrap;
    list-style: none;
    width: 100%;
    padding: 0 1em;
    animation: ${showAnimation} 200ms ease-out;
    
    @media ${devicesMax.tablet} {
        ${props => !props.showSideBar ? `padding: 0 ;` : null}    
    }
`;

const Direction = styled.div`
    width: max-content;
    display: grid;
    align-content: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    outline: none;
`;

const SidebarMenuItem = styled.li`
    display: flex;
    height: 40px;
    width: 100%;
    justify-content: flex-start; 
    align-items: center;
    padding-left: ${props => (props.depth * props.depthStep)}px;
    padding-right: 0.1em;
    transition: all 200ms ease-in-out;
    
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
    }

    ${props => (props.isSelected === true && props.hasItems === true) ? `
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;

        ${Direction} {
            animation: rotateDown 400ms ease-out;
        }
    ` : null}

    ${props => (!props.isSelected && props.hasItems) ? `
        ${Direction} {
            animation: rotateUp 400ms ease-out;
        }
    ` : null}

    ${props => props.Icon}:hover { // rgb(151, 192, 92)
        color: rgb(151, 192, 92);
    }

    @keyframes rotateDown {
        from {
            transform: rotate(180deg);
        }
    }

    @keyframes rotateUp {
        from {
            transform: rotate(-180deg);
        }
    }
    
    @media ${devicesMax.tablet} {
        /*justify-content: flex-start;  */   
        /*padding: 0;   */ 
    }
`;

const SidebarMenuItemLabel = styled.p`
    font-family: 'Roboto', 'Open Sans', sans-serif;
    color: #fff;
    font-size: ${props => (1.2 - props.fontStep)}em;
    font-weight: 200;
    line-height: 1.3;
    text-align: left;
    padding: 12px 10px;
    color: #ffffff;
    transition: all 200ms linear;

    /* ${({ showSideBar }) => showSideBar ? ` width: max-content; opacity; 1;` : `width: 0; opacity: 0; `};   */

    @media ${devicesMax.tablet} {
        ${props => !props.showSideBar ? ` 
            display: none;
        ` : null}           
    }
`;

/*
const Icon = styled.svg`
    width: 20px;
    height: 20px;
`
*/
