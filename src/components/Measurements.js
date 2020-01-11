import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    },
    submit: {
    margin: theme.spacing(3, 0, 2),
    }
}));

function Measurements( props ) {

    const classes = useStyles();

    const [value, setValue] = React.useState('ambulatoryPotential');
  
    // const handleChange = event => {
    //   setValue(event.target.value);
    // };

    return(
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
        </form>
    )
}

export default Measurements;