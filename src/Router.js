import React from 'react';
import { Switch, Route } from 'react-router';
import ClientList from './containers/2b-ExistingClients';
import ClientType from './containers/1-ClientType';
import NewClient from './containers/2a-NewClient';
import Equipment from './containers/3-Equipment';
import Measurements from './components/Measurements';
import ATPDashboard from './containers/01-ATPDashboard';
import ClientDetails from './containers/2b1-ClientDetails';
import Landing from './components/Landing/Landing';
import About from './components/About';
//Equipment Components/Containers
import CarSeat from './components/4a-CarSeat';
import GaitTrainer from './components/4b-GaitTraner';
import PWC from './components/4c-PWC';
import BathChair from './components/4d-BathChair';
import MWC from './components/4e-MWC';
import Stander from './components/4f-Stander';
import EntryRamp from './components/4g-EntryRamp';
import ThresholdRamp from './components/4h-ThresholdRamp';
import HospitalBed from './components/4i-HospitalBed';
import PediatricBed from './components/4j-PediatricBed';
import Repairs from './components/4k-Repairs';
import Modifications from './components/4l-Modifications';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ClientType} />
            <Route path="/clients/:id" component={ClientDetails} />
            <Route path="/clients" component={ClientList} />
            <Route path="/new-client" component={NewClient} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/about" component={About} />
            {/* Equipment Routes Here */}
            <Route path="/car-seat" component={CarSeat} />
            <Route path="/gait-trainer" component={GaitTrainer} />
            <Route path="/power-wheelchair" component={PWC} />
            <Route path="/bath-chair" component={BathChair} />
            <Route path="/manual-wheelchair" component={MWC} />
            <Route path="/stander" component={Stander} />
            <Route path="/entry-ramp" component={EntryRamp} />
            <Route path="/threshold-ramp" component={ThresholdRamp} />
            <Route path="/hospital-bed" component={HospitalBed} />
            <Route path="/pediatric-bed" component={PediatricBed} />
            <Route path="/repairs" component={Repairs} />
            <Route path="/modifications" component={Modifications} />
            {/* Forms and justifications for New Clients */}
            <Route path="/measurements" component={Measurements} />
            {/* Experimental dashboard and landing routes to preview */}
            <Route path="/dashboard" component={ATPDashboard} />
            <Route path="/landing" component={Landing} />
        </Switch>
    );
};

export default Router;