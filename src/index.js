import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {firebase} from './firebase/firebase';

// Styling
import 'normalize.css/normalize.css';
import "./styles/style.scss"

// Imports for React Dates
import 'react-dates/initialize'; // We need this before we use react-dates
import 'react-dates/lib/css/_datepicker.css';

// My Components
import AppRouter, {history} from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import { startSetSongs } from './actions/songs';

import configureStore from './store/configureStore';
import {login, logout} from './actions/auth';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

//Rendering the whole thing
ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

// This handles when there is an authenicated state changes
firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetSongs()).then(() => {
            renderApp();
            if (history.location.pathname ==='/') {
                history.push('/dashboard')
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }

});
