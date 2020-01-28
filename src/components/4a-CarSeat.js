import React from 'react';
import FunctionalAssessment from './FunctionalAssessment';

const CarSeat = ( props ) => {
    console.log('client' + props.client)
    return (
        <>
            <FunctionalAssessment client={props.client}/>
        </>
    )
}

export default CarSeat;