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
                {props.client.length === 0 ? <h2>Loading....</h2> 
                : 
                <div>
                 <h2>{props.client[0].first_name}</h2>
                {
                    Object.keys(props.client[0]).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${props.client[0][key]}`}></Chip>
                    })
                }
                </div>
                }
            </Paper>
        </Container>
        </>
    )
}

export default ClientDetails;