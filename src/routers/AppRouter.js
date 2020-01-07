import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Components
import SongListPage from '../components/SongList';
import CreateSongEntryPage from '../components/CreateSongEntry';



export const history = require("history").createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={SongListPage} exact={true} />
        <Route path="/create" component={CreateSongEntryPage}/>        
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
