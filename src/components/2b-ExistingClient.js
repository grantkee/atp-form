import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const ExistingClient = (props) => {
    return (
        <div className="card-container">
    {props.clients.length <= 1 ? <h1>{props.fetchClients()}Loading client database...</h1> : props.clients.map((client, idx) => (
                <Card key={client.id} className="card">
                    <CardContent className="text-gray">
                        <span>{client["first_name"] + ' ' + client["last_name"]}</span>
                        <ul>
                            <li>DOB: {client["date_of_birth"]}</li>
                            <li>Email: {client["email"]}</li>
                            <li>Gender: {client["gender"]}</li>
                            <li>{client["medicaid_payor"]}: {client["medicaid_id"].split('-').join('')}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/clients/${client.id}`} onClick={() => props.fetchClient( client.id )} >See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default ExistingClient;