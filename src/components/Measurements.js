import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import diagram from '../data/measurement-guide.svg'
//table imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//TableContainer not found at /core/TableContainer???
import TableContainer from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://grantkee.com">
        Test Company
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    marginTop: theme.spacing(2)
  },
  svg: {
      width: '100%'
  }
});

class Measurements extends Component {
  state = {
    diagnosis: '',
    diagnosis1: '',
    diagnosis2: '',
    diagnosis3: '',
    mobilityStatus: '',
    ambulatoryPotential: '',
    headControl: '',
    trunkControl: '',
    upperExtremities: '',
    lowerExtremities: '',
    transferCapability: ''
  }

  handleChange = ( e ) => {
    let newState = { ...this.state }
    newState[e.target.name] = e.target.value
    this.setState( newState )
  }

  handleSelectionChange = ( e ) => {
    const newState = {...this.state}
    let targetState = e.target.offsetParent.id.split('-')
    newState[targetState[0]] = e.target.innerText
    this.setState(newState)
  }

  render(){
    const { classes } = this.props;
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Functional Assessment
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
              <Grid item xs={12} >
                <img src={diagram} className={classes.svg}/>
              </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="diagnosis"
                autoComplete="dx"
                name="diagnosis"
                variant="filled"
                required
                fullWidth
                label="Diagnosis"
                autoFocus
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="diagnosis1"
                autoComplete="dx"
                name="diagnosis1"
                variant="standard"
                // required
                fullWidth
                label="Diagnosis"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="diagnosis2"
                name="diagnosis2"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                label="Diagnosis"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="diagnosis3"
                name="diagnosis3"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                label="Diagnosis"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href='/measurements'
            >
              Next
            </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
 }
}

export default withStyles(styles)(Measurements)