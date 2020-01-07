import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Components
import CreateSongEntry from '../components/CreateSongEntry';


export const history = require("history").createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={CreateSongEntry} exact={true}/>        
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
