import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { green } from '@material-ui/core/colors';
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
    width: 100
  },
}));

const Progress = ( props ) => {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  
  return (
    <>
      <h2>{props.client.first_name} {props.client.last_name}</h2>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item>
                <Paper className={classes.paper} >{props.client.equipment}</Paper>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

export default Progress;