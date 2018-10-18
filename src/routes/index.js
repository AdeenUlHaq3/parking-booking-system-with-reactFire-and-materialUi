import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../screens/SignUp/SignUp';
import SignIn from '../screens/SignIn/SignIn';

export default () => (
    <Switch>
        <Route path='/signUp' component={ SignUp } />
        <Route path='/signIn' component={ SignIn } />
    </Switch>   
);