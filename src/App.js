import React, { Component } from 'react';
import './App.css';
import AppBar from './components/PrimaryAppBar/PrimaryAppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: amber[500],
        },
        secondary: red,
        type: 'light'
    }
})

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        flexBasis: 200,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
    },
});

class App extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            showPassword: false,
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    PropTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {
            classes
        } = this.props;

        const {
            firstName,
            lastName,
            email,
            password,
            showPassword
        } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar />
                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={12}>
                            <TextField
                                id="standard-name"
                                label="First Name"
                                className={classes.textField}
                                value={ firstName }
                                onChange={ this.handleChange }
                                margin="normal"
                            />
                        </Grid>
                        <Grid item lg={12}>
                            <TextField
                                id="standard-name"
                                label="Last Name"
                                className={classes.textField}
                                value={ lastName }
                                onChange={ this.handleChange }
                            />
                        </Grid>
                        <Grid item lg={12}>
                            <TextField
                                label="Email"
                                className={classNames(classes.margin, classes.textField)}
                                type="email"
                                name="email"
                                value={email}
                                autoComplete="email"
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item lg={12}><FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                name='password'
                                onChange={this.handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl></Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }

}

export default withStyles(styles)(App);
