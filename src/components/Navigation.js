import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                {/* <IconButton color="inherit">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    DME 4 Me - Work in Progress
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation