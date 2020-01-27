import React from 'react';
import FunctionalAssessment from './FunctionalAssessment';

const GaitTrainer = ( props ) => {
    return (
        <>
            <FunctionalAssessment client={props.client}/>
        </>
    )
}

export default GaitTrainer;