import React from 'react';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import { Link } from 'react-router-dom';

const ClientDetails = ( props ) => {
    let client = props.client

    return (
        <>
        Oh god you gotta help
        {/* {props.clients.map((client, idx) => (
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
                 ))} */}

<Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{client.first_name}</h2>
                {
                    Object.keys(client).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${client[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
        </>
    )
}

export default ClientDetails;