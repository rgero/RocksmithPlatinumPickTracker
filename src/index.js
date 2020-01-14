import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styling
import 'normalize.css/normalize.css';
import "./styles/style.scss"

// Imports for React Dates
import 'react-dates/initialize'; // We need this before we use react-dates
import 'react-dates/lib/css/_datepicker.css';

// My Components
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import {setSongs} from './actions/songs';


const store = configureStore();

// Importing Mock Data - REMOVE ONCE DATABASE INTEGRATION IS INTRODUCED.
let DLCSong = [
    {
        artist: "Rise Against",
        songName: "Savior",
        path: "Lead",
        date: "2020-01-06",
        difficulty: "Master",
        accuracy: "100.00"
    },
    {
        artist: "Rise Against",
        songName: "Savior",
        path: "Bass",
        date: "2020-01-06",
        difficulty: "Master",
        accuracy: "100.00"
    },
    {
        artist: "Jake's Super Band",
        songName: "RAPTOR!!",
        path: "Lead",
        date: "2020-01-06",
        difficulty: "Easy. To strong",
        accuracy: "100.00"
    },
    {
        artist: "Bob Marley",
        songName: "Some Bob Marley Song",
        path: "Rhythm",
        date: "2020-01-06",
        difficulty: "Master",
        accuracy: "100.00"
    }
]

store.dispatch(setSongs(DLCSong));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
