import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const ExistingClient = (props) => {
    return (
        <div className="card-container">
            {/* <button onClick={() => props.fetchClients()}>Get Clients</button> */}
            {console.log(props.clients)}
    {props.clients.length === 0 ? <h1>{props.fetchClients()}Loading client database...</h1> : props.clients[0].map((client, idx) => (
                <Card key={client.id} className="card">
                    <CardContent className="text-gray">
                        <span>{client["first_name"] + ' ' + client["last_name"]}</span>
                        <ul>
                            <li>DOB: {client["date_of_birth"]}</li>
                            <li>Email: {client["email"]}</li>
                            <li>Gender: {client["gender"]}</li>
                            {console.log(client.medicaid_id)}
                            <li>{client["medicaid_payor"]}: {client["medicaid_id"].split('-').join('')}</li>
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

export default ExistingClient;