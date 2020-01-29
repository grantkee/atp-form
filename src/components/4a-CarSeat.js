import React from 'react';
import FunctionalAssessment from '../containers/FunctionalAssessment';

const CarSeat = ( props ) => {
    console.log('client' + props.client)
    return (
        <>
            <FunctionalAssessment />
        </>
    )
}

export default CarSeat;