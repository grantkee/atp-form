//note to grant: read documentation on crypto and learn why this was included in the redux_thunk class example but never used
import { generateKeyPairSync } from 'crypto';
import url from '../data/clientDemographics';

export const addClient = ( client ) => {
    return {
        type: 'ADD_CLIENT',
        value: client
    }
}

export const fetchClients = () => {
    return ( dispatch ) => {
        fetch(url)
        .then(res => {
            const action = {
                type: 'FETCH_CLIENTS',
                //not sure if Results is the name of the array or something we're creating here
                value: Response.Results
            }
            dispatch(action)
        })
        .catch(error => console.log(error))
    }
}