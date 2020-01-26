//https://www.youtube.com/watch?v=yRM-beLeUT8

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { amber, lime } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            //main primary has to be declared to use #
            main: '#4144B7'
        },
        secondary: {
            //main color off secondary has to be declared
            main: '#981A1D',
            //accents can be used with the .<letter>
            light: amber.A100,
            //type dark
            dark: lime[500]
        },
        spacing: {
            unit: 10
        },
        //declaring type 'dark' turns the entire app into dark mode. not sure how to control it, but the paper imports turn charcoal
        // type: 'dark'
    }
});

//shows the object that you can manipulate to create a custom theme in material-ui
console.log(theme)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));

serviceWorker.unregister();
