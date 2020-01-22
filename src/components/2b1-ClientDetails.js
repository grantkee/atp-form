import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const ClientDetails = ( props ) => {
    return (
        <>
        Oh god you gotta help
        {props.clients.map((client, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{client["first_name"] + ' ' + client["last_name"]}</span>
                        <ul>
                            <li>DOB: {client["date_of_birth"]}</li>
                            <li>Email: {client["email"]}</li>
                            <li>Gender: {client["gender"]}</li>
                            <li>{client["medicaid_payor"]}: {client["medicaid_id"]}</li>
                        </ul>
                    </CardContent>
                </Card>
                 ))}
        </>
    )
}

export default ClientDetails;