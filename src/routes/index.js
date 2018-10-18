import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../screens/SignUp/SignUp';

export default () => (
    <Switch>
        <Route key='signUp' path='/signUp' component={ SignUp } />
    </Switch>   
);