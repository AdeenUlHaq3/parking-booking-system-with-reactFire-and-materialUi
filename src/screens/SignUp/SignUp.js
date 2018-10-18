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

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                repeatPassword: '',
            },
            showPassword: false,
        }
    }

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleSignUp = () => {
        const {
            firstName,
            lastName,
            email,
            password
        } = this.state.user;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(snapshot => {
                firebase.database().ref(`parkingUsers/${snapshot.user.uid}`)
                    .set({
                        firstName,
                        lastName,
                        email,
                        password
                    })
                    .then(() => {
                        swal('Wooh........!', 'You are successfully signed up');
                        this.setState({
                            user: {
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                repeatPassword: '',
                            }
                        })
                    })
            })
    }

    render() {
        const {
            classes
        } = this.props;

        const {
            user
        } = this.state;

        return (
            <Grid container>
                <ValidatorForm
                    className={classes.form}
                    ref="form"
                    onSubmit={this.handleSignUp}
                    onError={errors => console.log(errors)}
                >
                    <Grid item lg={12}>
                        <TextValidator
                            label="First Name"
                            name="firstName"
                            className={classes.textField}
                            onChange={this.handleChange}
                            value={user.firstName}
                            validators={['required', 'matchRegexp:[a-z,A-Z]{1}']}
                            errorMessages={['this field is required', 'Type Mismatch']}
                            margin='normal'
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <TextValidator
                            label="Last Name"
                            name="lastName"
                            className={classes.textField}
                            onChange={this.handleChange}
                            value={user.lastName}
                            validators={['required', 'matchRegexp:[a-z,A-Z]{1}']}
                            errorMessages={['this field is required', 'Type Mismatch']}
                            margin='normal'
                        />
                    </Grid>
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
                        <TextValidator
                            label="Repeat password"
                            className={classes.textField}
                            onChange={this.handleChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={user.repeatPassword}
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
                            SignUp
                        </Button>
                    </Grid>
                </ValidatorForm>
            </Grid>
        )
    }
}

export default withStyles(styles)(SignUp);