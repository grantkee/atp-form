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
      <Link color="inherit" href="https://material-ui.com/">
        Functional Assessment
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
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
}));

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

export default function NewClient( props ) {
  const classes = useStyles();

  const [value, setValue] = React.useState('ambulatoryPotential');

  const handleChange = event => {
    setValue(event.target.value);
  };

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
                autoComplete="dx"
                name="diagnosis"
                variant="filled"
                required
                fullWidth
                id="diagnosis"
                label="Diagnosis"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="dx"
                name="diagnosis"
                variant="standard"
                // required
                fullWidth
                id="diagnosis"
                label="Diagnosis"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="dx"
                name="diagnosis"
                variant="outlined"
                fullWidth
                id="diagnosis"
                label="Diagnosis"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="dx"
                name="diagnosis"
                variant="outlined"
                fullWidth
                id="diagnosis"
                label="Diagnosis"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="mobility-status"
                options={mobilityStatus}
                style={{width: 268}}
                renderInput={params => (
                  <TextField {...params} label="Mobility Status" variant="outlined" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
              <Typography component="h3" variant="h5">Ambulatory Potential</Typography>
                {/* <FormLabel component="legend">Ambulatory Potential</FormLabel> */}
                <RadioGroup className={classes.radioGroup} aria-label="ambulatory-potential" name="amb-pot" value={value} onChange={handleChange}>
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
                <RadioGroup className={classes.radioGroup} aria-label="ambulatory-potential" name="amb-pot" value={value} onChange={handleChange}>
                  <FormControlLabel value="headGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="headFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="headPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="headNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Trunk Control</FormLabel>
                <RadioGroup className={classes.radioGroup} aria-label="ambulatory-potential" name="amb-pot" value={value} onChange={handleChange}>
                  <FormControlLabel value="trunkGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="trunkFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="trunkPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="trunkNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Upper Extremities</FormLabel>
                <RadioGroup className={classes.radioGroup} aria-label="ambulatory-potential" name="amb-pot" value={value} onChange={handleChange}>
                  <FormControlLabel value="upperGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="upperFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="upperPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="upperNone" control={<Radio />} label="None" />
                </RadioGroup>
                <FormLabel component="legend" className={classes.label}>Upper Extremities</FormLabel>
                <RadioGroup className={classes.radioGroup} aria-label="ambulatory-potential" name="amb-pot" value={value} onChange={handleChange}>
                  <FormControlLabel value="lowerGood" control={<Radio />} label="Good" />
                  <FormControlLabel value="lowerFair" control={<Radio />} label="Fair" />
                  <FormControlLabel value="lowerPoor" control={<Radio />} label="Poor" />
                  <FormControlLabel value="lowerNone" control={<Radio />} label="None" />
                </RadioGroup>
              </FormControl>
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
            <Typography component="h1" variant="h5">
          Insurance
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
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                width='50%'
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
  );
}