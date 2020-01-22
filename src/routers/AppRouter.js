import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Components
import SongListPage from '../components/SongList';
import CreateSongEntryPage from '../components/CreateSongEntry';
import NotFoundPage from '../components/NotFoundPage';
import EditSongEntry from '../components/EditSongEntry';
import LoginPage from '../components/LoginPage.js';



export const history = require("history").createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={SongListPage} exact={true} />
        <PrivateRoute path="/create" component={CreateSongEntryPage}/>
        <PrivateRoute path="/edit/:id" component={EditSongEntry} />    
        <Route component={NotFoundPage}/>    
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
