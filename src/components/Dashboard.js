import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Total from '../containers/Total'
import AddCar from '../containers/AddCar'
 
// const componentDidMount = (props) => {
//     debugger;
//     props.fetchClients()
// }

const Dashboard = (props) => {
    // props.fetchClients()
    // if(props.clients == []){
    //     return null;
    // }

    // let fetch = props.fetchClients()

        // console.log(props.fetchClients())

    return (
    
        <Container maxWidth="lg" className="car-container">
            <h4>{props.user.login ? `Welcome, ${props.user.username}` : 'You are logged out'}</h4>
            <h4>Logged In: {props.user.login ? 'true' : 'false'}</h4>
            <button onClick={props.user.login ? () => props.logout() : () => props.login()}>{props.user.login ? 'Logout' : 'Login'}</button>
            <div className="flex-container">
                <Total />
                <AddCar />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>DOB</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>MCO</TableCell>
                        <TableCell>Policy Number</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.clients.map((client, idx) => (
                    <TableRow key={client.id}>
                        <TableCell component="th" scope="row">
                            {client.id}
                        </TableCell>
                        <TableCell>{`${client["first_name"]} ${client["last_name"]}`}</TableCell>
                        <TableCell>{client["date_of_birth"]}</TableCell>
                        <TableCell>{client["gender"]}</TableCell>
                        <TableCell>{client["medicaid_payor"]}</TableCell>
                        <TableCell>{client["medicaid_id"].split('-').join('')}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick={() => props.removeClient(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard