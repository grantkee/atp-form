import React from 'react';
import FunctionalAssessment from './FunctionalAssessment';

const PediatricBed = ( props ) => {
    return (
        <>
            <FunctionalAssessment client={props.client}/>
        </>
    )
}

export default PediatricBed;