import React, { Component } from 'react';
import './App.css';
import AppBar from './components/PrimaryAppBar/PrimaryAppBar';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, white, blue, amber } from '@material-ui/core/colors';
import firebase from './config/firebase';
import { withRouter } from 'react-router-dom';

import routes from './routes';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: amber[500],
        },
        secondary: blue,
        type: 'light',
        raisedPrimary: {
            color: amber[500],
            backgroundColor: red,
            '&:hover': {
                backgroundColor: white,
            },
        }
    }
})

class App extends Component {
    
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
        console.log(this.props.history)
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar />
                { routes }
            </MuiThemeProvider>
        );
    }

}

export default withRouter(App);