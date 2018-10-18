import React, { Component } from 'react';
import './App.css';
import AppBar from './components/PrimaryAppBar/PrimaryAppBar';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Routes from './routes';

const styles = {
    root: {
        width: '100%',
        height: '100vh',
        background: '#e9ebee'
    },
    
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF8F00',
            contrastText: '#e9ebee'
        },
        secondary: {
            main: 'rgb(10,140,20)',
            contrastText: '#e9ebee'
          },
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
        const {
            classes
        } = this.props;
        
        return (
            <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <AppBar />
                <Routes />  
            </MuiThemeProvider>
            </div>
        );
    }

}

export default withStyles(styles)(withRouter(App));