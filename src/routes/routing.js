import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


function RouteWithSubroutes(route, container) {

    const { to, exact, component, Icon, desc } = route;

    if (!to) {
        return null;
    }

    const returnRoute = () => {
        if (container === 'header') {
            return (
                <Route
                    key={to}
                    path={to}
                    exact={exact}
                    render={(props) => (
                        <Title>
                            {Icon && <Icon color='mediumseagreen' strokeLinejoin='round' />}
                            <p>{desc}</p>
                        </Title>
                    )} />
            );
        } else if (container === 'content') {
            return (
                <Route
                    key={to}
                    path={to}
                    exact={exact}
                    render={(props) => (
                        <route.component routes={route.items} {...props} />
                    )} />
            );
        }
    }

    return returnRoute();
}

export default function RenderRoutes({routes, container, step = 0}) {
    

    return (
        <React.Fragment key={step}>
            {routes.map(route => {
                const hasItems = route.items && route.items.length > 0;
                const currentRoute = RouteWithSubroutes(route, container);

                return (
                    <React.Fragment key={route.to}>
                        {currentRoute}
                        { hasItems && RenderRoutes({ routes: route.items, container: container, step: step + 1 })}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        margin-right: 0.4em;
    }
`;