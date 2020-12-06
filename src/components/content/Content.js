import React, { useContext } from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import RenderRoutes from '../../routes/routing';

import Context from '../../context/AppContext';

export default function Content({ props, children }) {

    const { dataList, selectedItems, updateItems } = useContext(Context.AppContext);

    return (//{children}
        <ContentStyle>
            <Switch>
                <RenderRoutes routes={dataList} container='content' />
            </Switch>
            
        </ContentStyle>
    );
}// 


const ContentStyle = styled.div`

    grid-area: main;
    padding: 1em;
    display: grid;
    align-content: center;

`;