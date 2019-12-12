import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Navigation from './00-Navigation';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default function Equipment() {



    return (
        <>
        <Navigation/>
            <Grid container
                direction='row'
                justify='center'
                alignItems='center'
                >
                    <Grid item
                        justify='space-around'
                        border='black'
                    >
                        <Paper width='300' height='100'>Hiiii</Paper>
                    </Grid>
                </Grid>
        </>
    )
}
