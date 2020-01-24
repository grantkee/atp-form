import React, { Component } from 'react';

const ClientList = ( props ) => {
    //trying to fetchClients on initial render
         if(props.clients == []){
            props.fetchClients
         }

        return (
            <ul>
                {props.clients.map((client, idx) => {
                <li>{`${client.first_name} ${client.last_name}`}</li>
                })}
            </ul>
        )
}

export default ClientList;