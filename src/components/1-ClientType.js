import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import Navigation from '../containers/00-Navigation';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 140,
    width: 100,
    background: green
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
      <>
      <Navigation />

        <Grid container justify="center" spacing={spacing}>

            <Grid  item>
              <Link to={`/new-client`}>
              <Paper className={classes.paper} >New Client</Paper>
              </Link>
            </Grid>

            <Grid  item>
              <Link to={`/clients`}>
              <Paper className={classes.paper}>Existing Client</Paper>
              </Link>
            </Grid>
        </Grid>
    </>
  )
}