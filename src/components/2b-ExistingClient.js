//youtube.com/watch?v=BvtQMxekmH0
//https://www.youtube.com/watch?v=OlVkYnVXPl0

import React from 'react';
// import Clients from '../data/clientDemographics';
// import ClientList from '../components/ClientList';
//import ExistingClients from '../containers/2b-ExistingClients';

const ExistingClients = ( props ) => {

        return (
            <ul>
                {props.clients.map((contact) => {
                    return <p>{`${contact.first_name} ${contact.last_name}`}</p>
                })}
            </ul>
        )
}

export default ExistingClients;