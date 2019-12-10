import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './containers/1-ClientType';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    )
}

export default Router;