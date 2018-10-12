import React from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

    handleSubmit = () => {
        // your submit logic
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
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid item lg={12}>
                        <TextValidator
                            label="First Name"
                            name="firstName"
                            className={classes.textField}
                            onChange={this.handleChange}
                            value={user.firstName}
                            validators={['matchRegexp:[a-z,A-Z]{1}']}
                            errorMessages={['Type Mismatch']}
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
                            validators={['matchRegexp:[a-z,A-Z]{1}']}
                            errorMessages={['Type Mismatch']}
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
                        <Button variant="extendedFab" color="primary" className={classes.overrides}>
                            SignUp
                            <DeleteIcon color='secondary' className={classes.rightIcon} />
                        </Button>
                    </Grid>
                </ValidatorForm>
            </Grid>
        )
    }
}

export default withStyles(styles)(SignUp);