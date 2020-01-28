//signup example from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js
//also checkout https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/checkout for ideas on how to integrate forms with @material-ui

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
  


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
  constructor(props){
    super(props)
  this.state = {
    id: this.props.clients.length + 1,
    atp_id: this.props.atp_id,
    firstName: '',
    lastName: '',
    middleName: '',
    generation: '',
    dob: '',
    gender: '',
    address: '',
    cit: '',
    state: '',
    zip: '',
    caregiverRelationship: '',
    caregiverName: '',
    email: '',
    phone: '',
    medicare: false,
    medicaid: false,
    privateInsurance1: false,
    privateInsurance2: false,
    medicarePolicy: '',
    medicaidPolicy: '',
    private1Policy: '',
    private1Group: '',
    private2Policy: '',
    private2Group: ''
  }
  this.handleSubmit.bind(this)
}

  componentDidMount = () => {
    this.props.fetchClients()
  }

  handleChange = ( e ) => {
    const newState = {...this.state}
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleSelectionChange = ( e ) => {
    const newState = {...this.state}
    let targetState = e.target.offsetParent.id.split('-')
    newState[targetState[0]] = e.target.innerText
    this.setState(newState)
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    const payload = { ...this.state }
    this.props.addClient(payload)    
  }
  
  render(){
    const { classes } = this.props;
    console.log(this.props.clients)
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
        <form onSubmit={this.handleSubmit} className={classes.form} noValidate >
          <Grid container spacing={2}>
              {/* client's first name */}
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                autoComplete=""
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                color='secondary'
                autoFocus
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="middleName"
                autoComplete="mname"
                variant="outlined"
                fullWidth
                label="Middle Name"
                name="middleName"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="generation"
                autoComplete="generation"
                variant="outlined"
                fullWidth
                label="Suffix"
                name="generation"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                placeholder="yyyy-mm-dd"
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
                onChange={this.handleSelectionChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </Grid>
            <Typography component="h1" variant="h5">
          Insurance
            </Typography>
            {/* A text field for medicare policy will open if the checkbox is clicked */}
            <Grid item xs={12}>
              <FormControlLabel
                // fullWidth
                control={<Checkbox id="medicare" value={!this.state.medicare}  color="primary" />}
                label="Medicare"
                onClick={this.handleChange}
              />
            </Grid>
          {this.state.medicare && 
            <Grid item xs={12}>
              <TextField
                id="medicarePolicy"
                autoComplete=""
                name="medicarePolicy"
                variant="outlined"
                required
                fullWidth
                label="Medicare Policy Number"
                color='secondary'
                autoFocus
                onChange={this.handleChange}
              />
          </Grid>}
          {/* If the client has medicaid, it will ask for their policy number */}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox id="medicaid" value={!this.state.medicaid} color="primary" />}
                label="Medicaid"
                onClick={this.handleChange}
              />
            </Grid>
          {this.state.medicaid && 
            <Grid item xs={12}>
              <TextField
                id="medicaidPolicy"
                autoComplete=""
                name="medicaidPolicy"
                variant="outlined"
                required
                fullWidth
                label="Medicaid Policy Number"
                color='secondary'
                autoFocus
                onChange={this.handleChange}
              />
          </Grid>}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox id="privateInsurance1" value={!this.state.privateInsurance1} color="primary" />}
                label="Private Insurance"
                onClick={this.handleChange}
              />
            </Grid>
            {/* Clients with a private insurance policy will need to provide their policy and group numbers */}
          {this.state.privateInsurance1 && 
          <>
            <Grid item xs={12}>
              <TextField
                id="private1Policy"
                autoComplete=""
                name="private1Policy"
                variant="outlined"
                required
                fullWidth
                label="Private Insurance Policy Number"
                color='secondary'
                autoFocus
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="private1Group"
                autoComplete=""
                name="private1Group"
                variant="outlined"
                required
                fullWidth
                label="Private Insurance Group Number"
                color='secondary'
                onChange={this.handleChange}
              />
            </Grid>
          </>}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox id="privateInsurance2" value={!this.state.privateInsurance2} color="primary" />}
                label="Other private insurance"
                onClick={this.handleChange}
              />
            </Grid>
            {/* optional secondary private insurance policy...I've never seen three private insurances? */}
          {this.state.privateInsurance2 &&
          <>
            <Grid item xs={12}>
              <TextField
                id="private2Policy"
                autoComplete=""
                name="private2Policy"
                variant="outlined"
                required
                fullWidth
                label="Second Private Policy Number"
                color='secondary'
                autoFocus
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="private2Group"
                autoComplete=""
                name="private2Group"
                variant="outlined"
                required
                fullWidth
                label="Second Private Group Number"
                color='secondary'
                onChange={this.handleChange}
              />
            </Grid>
          </>}
            {/* <Grid item xs={12}>
              <FormControlLabel
                fullWidth
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have verified the information above is accurate and up-to-date."
              />
            </Grid> */}
          </Grid>
        <Link to={`/clients/${this.props.clients.length + 1}/equipment`}>
          <Button
            type="submit"
            fullWidth
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Next
          </Button>
          </Link>
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