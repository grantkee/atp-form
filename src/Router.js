import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './containers/1-ClientType';
import NewClient from './components/2a-NewClient';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/client' component={NewClient} />
        </Switch>
    )
}

export default Router;