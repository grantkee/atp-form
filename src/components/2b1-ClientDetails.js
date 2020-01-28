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

    return (
    <>
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                 <h2>{props.client.first_name}</h2>
                {
                    Object.keys(props.client).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${props.client[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    </>
    )
}

export default ClientDetails;