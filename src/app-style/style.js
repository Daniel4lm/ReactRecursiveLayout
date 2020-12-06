import styled, { createGlobalStyle } from 'styled-components';
import { devicesMin, devicesMax } from '../breakpoints/breakpoints';

const GlobalCSS = createGlobalStyle`
    *,
    *::before, 
    *::after {
        margin: 0; 
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%; /*1rem = 10px*/
        box-sizing: border-box;    
    }  

    body {
        font-size: 1.4rem;
        font-family: 'Roboto', 'Open Sans', sans-serif;  
    }
`;

const AppStyle = {
    Wrapper: styled.main`
        display: flex;
        flex-flow: column nowrap;
        background-color: #fcfcfc;
        min-height: 100vh;
        height: 100%
    `,
    GridContainer: styled.main`
        display: grid;
        grid-template-columns: 20% 1fr; 
        grid-template-rows: 72px 1fr;  
    
        grid-template-areas: 
        "sidebar head head head" 
        "sidebar main main main" 
        "sidebar main main main" 
        "sidebar main main main";  
    
        /* grid-container height = 100% of viewport height */ 
        height: 100vh;

        @media screen and ${devicesMax.mobileM} { /*max-width: 375px*/
       
            grid-template-columns: 1fr;         
            grid-template-rows: 72px 1fr;         
            grid-template-areas:         
                "head"         
                "main";      
        }

        @media screen and ${devicesMax.laptop} { /*max-width: 375px*/
       
            grid-template-columns: max-content 1fr;
            grid-template-rows: 72px 1fr;
            grid-template-areas:
                "sidebar head " 
                "sidebar main " 
                "sidebar main " 
                "sidebar main ";
        }

    `
};

export { GlobalCSS, AppStyle };

