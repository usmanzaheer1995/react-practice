import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;