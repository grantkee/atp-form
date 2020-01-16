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
//for radio buttons within form
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
  radioGroup: {
    direction: 'row',
    justify: 'space-between'
  },
  label: {
    marginTop: theme.spacing(2)
  }
});

const mobilityStatus = [
  "Non-Ambulatory",
  "Not Functionally Ambulatory",
  "With Assistance",
  "Short Distances Only (less than 10 feet)",
  "Ambulatory"
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

class FunctionalAssesment extends Component {
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
    lowerExtremities: ''
  }

  handleSelection = ( e ) => {
    let newState = { ...this.state }
    newState[e.target.name] = e.target.value
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
          Functional Assessment
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="diagnosis1"
                autoComplete="dx"
                name="diagnosis"
                variant="standard"
                // required
                fullWidth
                label="Diagnosis"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="diagnosis2"
                autoComplete="dx"
                variant="outlined"
                fullWidth
                id="diagnosis"
                label="Diagnosis"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="diagnosis3"
                autoComplete="dx"
                name="diagnosis"
                variant="outlined"
                fullWidth
                label="Diagnosis"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="mobilityStatus"
                options={mobilityStatus}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Mobility Status" variant="outlined" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
              <Typography component="h3" variant="h5">Ambulatory Potential:</Typography>
                {/* <FormLabel component="legend">Ambulatory Potential</FormLabel> */}
                <RadioGroup id="ambulatoryPotential" className={classes.radioGroup} aria-label="ambulatory-potential" name="ambulatoryPotential" value={this.state.ambulatoryPotential} onChange={this.handleSelection}>
                  <FormControlLabel value="not-expected" control={<Radio />} label="Not Expected" />
                  <FormControlLabel value="within-one" control={<Radio />} label="Expected within 1 year" />
                  <FormControlLabel value="not expected" control={<Radio />} label="Expected in future, >1 year" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
              <Typography component="h3" variant="h5">Functional Level:</Typography>
                <FormLabel component="legend" className={classes.label}>Head Control</FormLabel>
                <RadioGroup id="headControl" className={classes.radioGroup} aria-label="ambulatory-potential" name="headControl" value={this.state.headControl} onChange={this.handleSelection} row>
                  <FormControlLabel value="headGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="headFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="headPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="headNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Trunk Control</FormLabel>
                <RadioGroup id="trunkControl" className={classes.radioGroup} aria-label="ambulatory-potential" name="trunkControl" value={this.state.trunkControl} onChange={this.handleSelection} row>
                  <FormControlLabel value="trunkGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="trunkFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="trunkPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="trunkNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Upper Extremities</FormLabel>
                <RadioGroup id="upperExtremity" className={classes.radioGroup} aria-label="ambulatory-potential" name="upperExtremity" value={this.state.upperExtremities} onChange={this.handleSelection} row>
                  <FormControlLabel value="upperGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="upperFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="upperPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="upperNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Lower Extremities</FormLabel>
                <RadioGroup id="lowerExtremity" className={classes.radioGroup} aria-label="ambulatory-potential" name="lowerExtremity" value={this.state.lowerExtremities} onChange={this.handleSelection} row>
                  <FormControlLabel value="lowerGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="lowerFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="lowerPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="lowerNone" control={<Radio />} label="None" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <Typography component="h5" variant="h5">Transfer Capability:</Typography>
                {/* <FormLabel component="legend" className={classes.label}>Transfer Capability</FormLabel> */}
                <RadioGroup id="transferCapability" className={classes.radioGroup} aria-label="ambulatory-potential" name="transferCapability" value={this.state.transferAbility} onChange={this.handleSelection} >
                  <FormControlLabel value="transferMaximum" control={<Radio />} label="Maximum Assistance" />
                  <FormControlLabel value="transferModerate" control={<Radio />} label="Moderate Assistance" />
                  <FormControlLabel value="transferMinimum" control={<Radio />} label="Minimum Assistance" />
                  <FormControlLabel value="transferIndependent" control={<Radio />} label="Independent" />
                  <FormControlLabel value="transIndEvenOnly" control={<Radio />} label="Independent across even surfaces only" />
                </RadioGroup>
              </FormControl>
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
    </>
  );
}
}

export default withStyles(styles)(FunctionalAssesment)