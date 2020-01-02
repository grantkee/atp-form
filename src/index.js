//https://www.youtube.com/watch?v=yRM-beLeUT8

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { green, amber, blue, lime } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4144B7'
        },
        secondary: {
            main: '#981A1D',
            light: amber.A100,
            dark: lime[500]
        },
        type: 'dark'
    }
});

console.log(theme)

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
