import React, { forwardRef, useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { devicesMin, devicesMax } from '../../breakpoints/breakpoints';

export const HamburgerButton = forwardRef(({ toggleBar, toggleSideBar }, ref) => {
  return (
    <HamburgerStyle.Wrapper ref={ref} onClick={() => toggleSideBar(!toggleBar)}>
      <HamburgerStyle.Lines toggleBar={toggleBar} />
    </HamburgerStyle.Wrapper>
  )
})

const Animation = keyframes`
      0% {
          opacity: 0;
          transform: translateY(-10px);
      }
      100% {
          opacity: 1;
      }
    `

const HamburgerStyle = {
  Wrapper: styled.button`

      height: 3rem;
      width: 3rem;
      position: relative;
      font-size: 12px;
  
      display: none;

      @media only screen and ${devicesMax.mobileM} {
        display: block;
      }
  
      /* Remove default button styles */
      border: none;
      background: transparent;
      outline: none;
  
      cursor: pointer;

      z-index: 600;
  
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
      }
    `,
  Lines: styled.div`
      top: 50%;
      margin-top: -0.125em;
  
      &,
      &:after,
      &:before {
        height: 2px;
        pointer-events: none;
        display: block;
        content: "";
        background-color: rgb(109, 112, 116);
        position: absolute;
        transition: all 200ms ease-in-out;
      }

      & {
        width: 100%;
      }
  
      &:after {        
        ${props => props.toggleBar ? `width: 100%;` : `width: 60%;`}        
        /* Move bottom line below center line */        
        top: -0.8rem;
        right: 0;
      }
  
      &:before {
        ${props => props.toggleBar ? `width: 100%;` : `width: 60%;`}
        /* Move top line on top of center line */
        top: 0.8rem;
        left: 0;
      }
    `,

};