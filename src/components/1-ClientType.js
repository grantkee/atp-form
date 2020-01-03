import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from '../containers/00-Navigation';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  paper: {
    //padding referencing the value of spacing declared in the index.js file 
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    width: 250,
    marginTop: '25%'
  },
  container: {
    height: 'calc(60% - 130px)',
    width: '100%'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
      <>
      <Navigation />

        <Grid container justify="space-around" spacing={spacing} className={classes.container}>

            <Grid item>
              <Link to={`/new-client`}>
              <Paper className={classes.paper} >New Client</Paper>
              </Link>
            </Grid>

            <Grid item>
              <Link to={`/clients`}>
              <Paper className={classes.paper}>Existing Client</Paper>
              </Link>
            </Grid>
        </Grid>
    </>
  )
}