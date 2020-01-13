import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Components
import SongListPage from '../components/SongList';
import CreateSongEntryPage from '../components/CreateSongEntry';
import NotFoundPage from '../components/NotFoundPage';



export const history = require("history").createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={SongListPage} exact={true} />
        <Route path="/create" component={CreateSongEntryPage}/>    
        <Route component={NotFoundPage}/>    
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
