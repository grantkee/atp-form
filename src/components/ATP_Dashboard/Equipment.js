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

const equipment = [
    "Gait Trainer",
    "Power Wheelchair",
    "Pediatric Bed"
  ]

function Equipment( props ) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  
  return (
    <>
      <h2>Current Equipment</h2>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {equipment.map((value, index) => (
            <Grid key={index} item>
              <Link to={`/clients/${props.client.id}/equipment/${value.toLowerCase().split(' ').join('-')}`}>
                <Paper className={classes.paper} onClick={() => props.addEquipment( value.toLowerCase().split(' ').join('-') )}>{value}</Paper>
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