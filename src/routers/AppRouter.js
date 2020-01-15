import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Components
import SongListPage from '../components/SongList';
import CreateSongEntryPage from '../components/CreateSongEntry';
import NotFoundPage from '../components/NotFoundPage';
import EditSongEntry from '../components/EditSongEntry';



export const history = require("history").createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={SongListPage} exact={true} />
        <Route path="/create" component={CreateSongEntryPage}/>
        <Route path="/edit/:id" component={EditSongEntry} />    
        <Route component={NotFoundPage}/>    
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
