
//signup example from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js
//also checkout https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/checkout for ideas on how to integrate forms with @material-ui

import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
}));

const genders = [
  "male",
  "female"
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

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Client
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Date of Birth"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Date of Birth"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="gender-box"
                options={genders}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Gender" variant="outlined" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="address"
                variant="outlined"
                required
                fullWidth
                id="address"
                label="address"
                name="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="city"
                name="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="state"
                variant="outlined"
                required
                fullWidth
                id="state"
                label="state"
                name="state"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="zip"
                variant="outlined"
                required
                fullWidth
                id="zip"
                label="zip"
                name="zip"
              />
            </Grid>
            <Typography component="h1" variant="h5">
          Caregiver
            </Typography>
            <Grid item xs={12}>
              <TextField
                autoComplete="rparty"
                variant="outlined"
                required
                fullWidth
                id="responsibleParty"
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
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="phone"
                id="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="caregiver-name"
                label="Caregiver Name"
                type="caregiver-name"
                id="caregiver-name"
                autoComplete="current-caregiver-name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
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
  );
}