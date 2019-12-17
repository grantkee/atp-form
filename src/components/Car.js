import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const Car = (props) => {
    const id = props.match.params.id

    const client = props.clients.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{client.first_name}</h2>
                {
                    Object.keys(client).map((key, idx) => {
                        return <Chip label={`${key}: ${client[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car