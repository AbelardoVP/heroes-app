import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoginScreen } from '../components/ui/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { useContext } from 'react';
import { authContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {

    const { user } = useContext(authContext)
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />
                    <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
                </Switch>
            </div>
        </Router>
    )
}
