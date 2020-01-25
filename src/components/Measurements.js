import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import diagram from '../data/measurement-guide.svg';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
//table imports
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// //TableContainer not found at /core/TableContainer???
// import TableContainer from '@material-ui/core';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';


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
    marginTop: theme.spacing(3)
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
    measurement1: '',
    measurement2: '',
    measurement3: '',
    measurement4: '',
    measurement5: '',
    measurement6: '',
    measurement7: '',
    measurement8: '',
    measurement9: '',
    measurement10: '',
    measurement11: '',
    measurement12: '',
    measurement13: '',
    measurement14: ''
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
          Measurements
        </Typography>
        <form className={classes.form} noValidate>
              <Grid container spacing={2} >
                <img src={diagram} className={classes.svg} alt="measurement-guide"/>
              </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="measurement1"
                name="measurement1"
                label="Top of head to bottom of buttocks"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                autoFocus
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement2"
                name="measurement2"
                label="Arm pit to bottom of buttocks"
                autoComplete="dx"
                variant="outlined"
                // required
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement3"
                name="measurement3"
                label="Top of shoulder to bottom of buttocks"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement4"
                name="measurement4"
                label="Elbow to bottom of buttocks"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement5"
                name="measurement5"
                label="Back of buttocks to back of knee"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="measurement6"
                name="measurement6"
                label="Foot length"
                autoComplete="dx"
                variant="outlined"
                // required
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="measurement7"
                name="measurement7"
                label="Head width"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement8"
                name="measurement8"
                label="Shoulder width"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement9"
                name="measurement9"
                label="Arm pit to arm pit"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement10"
                name="measurement10"
                label="Hip width"
                autoComplete="dx"
                variant="outlined"
                // required
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement11"
                name="measurement11"
                label="Distance to bottom of left leg"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="measurement12"
                name="measurement12"
                label="Distance to bottom of right leg"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
                required
              />
            </Grid>     
            <Grid item xs={12} sm={6}>
              <TextField
                id="measurement13"
                name="measurement13"
                label="Chest depth"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="measurement14"
                name="measurement14"
                label="Forearm length"
                autoComplete="dx"
                variant="outlined"
                fullWidth
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

export default withStyles(styles)(Measurements);