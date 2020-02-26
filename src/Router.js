import React from 'react';
import { Switch, Route } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import ClientList from './containers/2b-ExistingClients';
import ClientType from './containers/1-ClientType';
import NewClient from './containers/2a-NewClient';
import Equipment from './containers/3-Equipment';
import Measurements from './containers/Measurements';
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
            <Route exact path="/" component={ATPDashboard} />
            <Route path="/new-client" component={NewClient} />
            <Route path="/about" component={About} />
            {/* Equipment Routes Here */}
            {/* Forms and justifications for Clients */}
            <Route path="/clients/:id/equipment/:equipType/measurements" component={Measurements} />
            <Route path="/clients/:id/equipment/car-seat" component={CarSeat} />
            <Route path="/clients/:id/equipment/gait-trainer" component={GaitTrainer} />
            <Route path="/clients/:id/equipment/power-wheelchair" component={PWC} />
            <Route path="/clients/:id/equipment/bath-chair" component={BathChair} />
            <Route path="/clients/:id/equipment/manual-wheelchair" component={MWC} />
            <Route path="/clients/:id/equipment/stander" component={Stander} />
            <Route path="/clients/:id/equipment/entry-ramp" component={EntryRamp} />
            <Route path="/clients/:id/equipment/threshold-ramp" component={ThresholdRamp} />
            <Route path="/clients/:id/equipment/hospital-bed" component={HospitalBed} />
            <Route path="/clients/:id/equipment/pediatric-bed" component={PediatricBed} />
            <Route path="/clients/:id/equipment/repairs" component={Repairs} />
            <Route path="/clients/:id/equipment/modifications" component={Modifications} />
            <Route path="/clients/:id/equipment" component={Equipment} />
            <Route path="/clients/:id" component={ClientDetails} />
            <Route path="/clients" component={ClientList} />
            <Route path="/dashboard" component={ATPDashboard} />
            <Route path="/landing" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Switch>
    );
};

export default Router;