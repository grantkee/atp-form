import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const ClientList = (props) => {
    return (
        <div className="card-container">
            {props.clients.map((client, idx) => (
                <Card key={clientInformation.id} className="card">
                    <CardContent className="text-gray">
                        <span>{client.first_name + ' ' + client.last_name}</span>
                        <ul>
                        <li>DOB: {client["date_of_birth"]}</li>
                        <li>Email: {client["email"]}</li>
                        <li>Gender: {client["gender"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/client/${client.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default ClientList;