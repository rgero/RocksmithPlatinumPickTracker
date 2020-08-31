import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Components
import DashboardPagePage from '../components/DashboardPage';
import CreateSongEntryPage from '../components/CreateSongEntry';
import NotFoundPage from '../components/NotFoundPage';
import EditSongEntry from '../components/EditSongEntry';
import LoginPage from '../components/LoginPage.js';
import ImportPage from '../components/ImportPage';



export const history = require('history').createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/dashboard' component={DashboardPagePage} exact={true} />
        <PrivateRoute path='/create' component={CreateSongEntryPage}/>
        <PrivateRoute path='/edit/:id' component={EditSongEntry} />
        <PrivateRoute path='/import' component={ImportPage} exact={true}/>    
        <Route component={NotFoundPage}/>    
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
