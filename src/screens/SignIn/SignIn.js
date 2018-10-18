import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import firebase from '../../config/firebase';
import swal from 'sweetalert';

const styles = theme => ({
    textField: {
        width: '100%',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    form: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%'
    },
    button: {
        borderRadius: 0,
        fontWeight: 'bold',
        marginTop: 10,
        float: 'right'
    }
});

class SignIn extends React.Component {
    state = {
        user: {
            email: '',
            password: ''
        },
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleSignIn = () => {
        const {
            email,
            password
        } = this.state.user;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                swal('Login', user.user.uid);
            })
    }

    render() {
        const {
            classes
        } = this.props;

        const {
            user
        } = this.state;

        return(
            <Grid container>
                <ValidatorForm
                    className={classes.form}
                    ref="form"
                    onSubmit={this.handleSignIn}
                    onError={errors => console.log(errors)}
                >
                    <Grid item lg={12}>
                        <TextValidator
                            label="Email"
                            className={classes.textField}
                            onChange={this.handleChange}
                            name="email"
                            value={user.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                            margin='normal'
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <TextValidator
                            label="Password"
                            className={classes.textField}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={user.password}
                            margin='normal'
                        /></Grid>
                    <Grid item lg={12}>
                        <Button
                            type='submit'
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            value='SignUp'
                        >
                            SignIn
                        </Button>
                    </Grid>
                </ValidatorForm>
            </Grid>
        );
    };
};

export default withStyles(styles)(SignIn);