import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { green } from '@material-ui/core/colors';
import Navigation from '../containers/00-Navigation';
import FunctionalAssessment from './FunctionalAssessment';
import { Link } from 'react-router-dom';

const CarSeat = ( props ) => {
    return (
        <>
        <Navigation />
        <FunctionalAssessment />
        </>
    )
}

export default CarSeat;