//youtube.com/watch?v=BvtQMxekmH0
//https://www.youtube.com/watch?v=OlVkYnVXPl0

import React from 'react';
import Clients from '../data/clientDemographics';

class ClientList extends React.Component {
    render() {
        return (
            <ul>
                {Clients.map((contact) => {
                    return <p>{`${contact.first_name} ${contact.last_name}`}</p>
                })}
            </ul>
        )
    }
}

export default ClientList;