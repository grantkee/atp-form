import React from 'react'
import { Switch, Route } from 'react-router'
import Dashboard from './containers/Dashboard'
import Import from './components/Import'
import ClientList from './containers/2b-ExistingClients';
import ClientType from './containers/1-ClientType';
import NewClient from './containers/2a-NewClient';
import Equipment from './containers/3-Equipment';
import CarSeat from './components/4a-CarSeat';
import Measurements from './components/Measurements';
import ATPDashboard from './containers/01-ATPDashboard';
import ClientDetails from './containers/2b1-ClientDetails';
import Landing from './components/Landing/Landing'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ClientType} />
            <Route path="/dashboard-old" component={Dashboard} />
            <Route path="/import" component={Import} />
            <Route path="/clients/:id" component={ClientDetails} />
            <Route path="/clients" component={ClientList} />
            <Route path="/new-client" component={NewClient} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/car-seat" component={CarSeat} />
            <Route path="/measurements" component={Measurements} />
            {/* Experimental dashboard and landing routes to preview */}
            <Route path="/dashboard" component={ATPDashboard} />
            <Route path="/landing" component={Landing} />
        </Switch>
    );
};

export default Router;