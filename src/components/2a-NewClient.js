
//signup example from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js
//also checkout https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/checkout for ideas on how to integrate forms with @material-ui

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
  
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://grantkee.com">
        Grant Kee
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
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
})

const genders = [
  "Male",
  "Female",
  "Other"
]

const relationship = [
  'Self',
  'Mom',
  'Dad',
  'Grandparent',
  'Aunt',
  'Uncle',
  'Sibling',
  'Foster Parent',
  'Other'
]

class NewClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    address: '',
    cit: '',
    state: '',
    zip: '',
    caregiverRelationship: '',
    caregiverName: '',
    email: '',
    phone: ''
  }

  handleChange = ( e ) => {
    const newState = {...this.state}
    newState[e.target.id] = e.target.innerText
    this.setState(newState)
    debugger
  }

  handleSelectionChange = ( e ) => {
    const newState = {...this.state}
    let targetState = e.target.offsetParent.id.split('-')
    newState[targetState[0]] = e.target.innerText
    this.setState(newState)
    debugger
  }
  
  render(){
    const { classes } = this.props;
  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Client
        </Typography>
        {/* I need to learn more about validate vs noValidate on the form. It has something to do with what the server checks, and I think I want to validate form submissions */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
              {/* client's first name */}
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                color='secondary'
                autoFocus
              />
            </Grid>
              {/* client's last name */}          
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                autoComplete="lname"
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lastName"
              />
            </Grid>
              {/* client's date of birth */}
            <Grid item xs={12}>
              <TextField
                id="dob"
                autoComplete="fname"
                name="Date of Birth"
                variant="outlined"
                required
                fullWidth
                label="Date of Birth"
              />
            </Grid>
              {/* client's gender */}
            <Grid item xs={12}>
              <Autocomplete
                id="gender"
                options={genders}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Gender" variant="outlined" fullWidth />
                )}
              />
            </Grid>
              {/* client's main address */}
            <Grid item xs={12}>
              <TextField
                id="address"
                autoComplete="address"
                variant="outlined"
                required
                fullWidth
                label="Address"
                name="address"
              />
            </Grid>
              {/* client's city */}
            <Grid item xs={12}>
              <TextField
                autoComplete="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
              />
            </Grid>
              {/* client's state */}
            <Grid item xs={12}>
              <TextField
                id="state"
                autoComplete="state"
                variant="outlined"
                required
                fullWidth
                label="State"
                name="state"
              />
            </Grid>
              {/* client's zip code */}
            <Grid item xs={12}>
              <TextField
                id="zip"
                autoComplete="zip"
                variant="outlined"
                required
                fullWidth
                label="Zip"
                name="zip"
              />
            </Grid>
              {/* next section - focused on caregiver */}
            <Typography component="h1" variant="h5">
          Caregiver
            </Typography>
              {/* what is the relationship of the caregiver to the client */}
            <Grid item xs={12}>
              <Autocomplete
                id="caregiverRelationship"
                options={relationship}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Relationship" variant="outlined" value={params.inputProps.value} fullWidth />
                  )}
                  onChange={this.handleSelectionChange}
                  />
            </Grid>
              {/* is client independent or do they have a legal guardian */}
            {this.state.caregiverRelationship !== 'Self' &&
              <Grid item xs={12}>
                <TextField
                  id="caregiver-name"
                  variant="outlined"
                  required
                  fullWidth
                  name="caregiver-name"
                  label="Caregiver Name"
                  type="caregiver-name"
                  autoComplete="current-caregiver-name"
                />
              </Grid>
            }
              {/* perferred email */}
            <Grid item xs={12}>
              <TextField
                id="email"
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
              {/* preferred phone */}
            <Grid item xs={12}>
              <TextField
                id="phone"
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Typography component="h1" variant="h5">
          Insurance
            </Typography>
            <Grid item xs={12}>
              <TextField
                id="responsibleParty"
                autoComplete="rparty"
                variant="outlined"
                required
                fullWidth
                label="Responsible Party"
                name="responsible party"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="relationship-box"
                options={relationship}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Relationship" variant="outlined" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone"
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="caregiver-name"
                variant="outlined"
                required
                fullWidth
                name="caregiver-name"
                label="Caregiver Name"
                type="caregiver-name"
                autoComplete="current-caregiver-name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                fullWidth
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have verified the information above is accurate and up-to-date."
              />
            </Grid>
          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href='/equipment'
            >
              Next
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </>
  )};
}

export default withStyles(styles)(NewClient)