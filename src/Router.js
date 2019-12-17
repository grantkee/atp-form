import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'
import Import from './components/Import'
import ClientList from './containers/2b-ExistingClients';
import ClientType from './components/1-ClientType';
import NewClient from './components/2a-NewClient';
import Equipment from './containers/3-Equipment';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ClientType} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/import" component={Import} />
            <Route path="/clients" component={ClientList} />
            <Route path="/new-client" component={NewClient} />
            <Route path="/equipment" component={Equipment} />
        </Switch>
    );
};

export default Router;