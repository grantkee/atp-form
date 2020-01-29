import React, { Component } from 'react';
import Copyright from './Copyright';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
            <Grid item xs={12}>
              <Autocomplete
                id="mobilityStatus"
                options={mobilityStatus}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Mobility Status" variant="outlined" fullWidth />
                )}
                onChange={this.handleSelectionChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
              <Typography component="h3" variant="h5">Ambulatory Potential:</Typography>
                {/* <FormLabel component="legend">Ambulatory Potential</FormLabel> */}
                <RadioGroup id="ambulatoryPotential" className={classes.radioGroup} aria-label="ambulatory-potential" name="ambulatoryPotential" value={this.state.ambulatoryPotential} onChange={this.handleChange}>
                  <FormControlLabel value="notExpected" control={<Radio />} label="Not Expected" />
                  <FormControlLabel value="expectedSoon" control={<Radio />} label="Expected within 1 year" />
                  <FormControlLabel value="expectedFar" control={<Radio />} label="Expected in future, >1 year" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
              <Typography component="h3" variant="h5">Functional Level:</Typography>
                <FormLabel component="legend" className={classes.label}>Head Control</FormLabel>
                <RadioGroup id="headControl" className={classes.radioGroup} aria-label="ambulatory-potential" name="headControl" value={this.state.headControl} onChange={this.handleChange} row>
                  <FormControlLabel value="headGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="headFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="headPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="headNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Trunk Control</FormLabel>
                <RadioGroup id="trunkControl" className={classes.radioGroup} aria-label="ambulatory-potential" name="trunkControl" value={this.state.trunkControl} onChange={this.handleChange} row>
                  <FormControlLabel value="trunkGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="trunkFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="trunkPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="trunkNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Upper Extremities</FormLabel>
                <RadioGroup id="upperExtremity" className={classes.radioGroup} aria-label="ambulatory-potential" name="upperExtremities" value={this.state.upperExtremities} onChange={this.handleChange} row>
                  <FormControlLabel value="upperGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="upperFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="upperPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="upperNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Lower Extremities</FormLabel>
                <RadioGroup id="lowerExtremity" className={classes.radioGroup} aria-label="ambulatory-potential" name="lowerExtremities" value={this.state.lowerExtremities} onChange={this.handleChange} row>
                  <FormControlLabel value="lowerGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="lowerFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="lowerPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="lowerNone" control={<Radio />} label="None" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <Typography component="h5" variant="h5">Transfer Capability:</Typography>
                {/* <FormLabel component="legend" className={classes.label}>Transfer Capability</FormLabel> */}
                <RadioGroup id="transferCapability" className={classes.radioGroup} aria-label="ambulatory-potential" name="transferCapability" value={this.state.transferAbility} onChange={this.handleChange} >
                  <FormControlLabel value="transferMaximum" control={<Radio />} label="Maximum Assistance" />
                  <FormControlLabel value="transferModerate" control={<Radio />} label="Moderate Assistance" />
                  <FormControlLabel value="transferMinimum" control={<Radio />} label="Minimum Assistance" />
                  <FormControlLabel value="transferIndependent" control={<Radio />} label="Independent" />
                  <FormControlLabel value="transIndEvenOnly" control={<Radio />} label="Independent across even surfaces only" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Link to={`/clients/${this.props.client.id}/equipment/${this.props.client.equipment}/measurements`}>
            <Button
              type="submit"
              fullWidth
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
  );
 }
}

export default withStyles(styles)(FunctionalAssesment)