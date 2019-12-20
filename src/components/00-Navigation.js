import React from 'react';
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const Navigation = ( props ) => { 
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Travis Medical
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/new-client">New Client</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/equipment">Equipment</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/clients">Search Clients</Link>
                    </li>
                </ul>
            </Toolbar>
            <h4>{props.user.login ? `Welcome, ${props.user.username}` : 'You are logged out'}</h4>
            <h4>Logged In: {props.user.login ? 'true' : 'false'}</h4>
            <button onClick={props.user.login ? () => props.logout() : () => props.login()}>{props.user.login ? 'Logout' : 'Login'}</button>
        </AppBar>
    )
}

export default Navigation;