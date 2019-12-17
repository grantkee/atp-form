import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';


const Car = (props) => {
    const id = props.match.params.id

    const car = props.cars.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car