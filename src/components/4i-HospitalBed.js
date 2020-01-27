import React from 'react';
import FunctionalAssessment from './FunctionalAssessment';

const HospitalBed = ( props ) => {
    return (
        <>
            <FunctionalAssessment client={props.client}/>
        </>
    )
}

export default HospitalBed;