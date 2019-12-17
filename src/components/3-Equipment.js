import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import Navigation from './00-Navigation';
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
    // background: green
  },
}));

const equipmentList = [
  "Car Seat",
  "Gait Trainer",
  "Power Wheelchair",
  "Bath Chair",
  "Manual Wheelchair",
  "Stander",
  "Entry Ramp",
  "Threshhold Ramp",
  "Hospital Bed",
  "Pediatric Bed"
]

const Equipment = ( props ) => {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
      <>
      <Navigation />
      <h2>ClientLast, ClientFirst</h2>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {props.equipment.map((value, index) => (
            <Grid key={index} item>
              <Link to={`/${value}`}>
              <Paper className={classes.paper}>{value}</Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

export default Equipment;