import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';

export default
    <Switch>
        {
            [ 
                <Route key='signUp' path='/signUp' component={ SignUp } />
            ]
        }
    </Switch>   