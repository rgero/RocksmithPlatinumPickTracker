import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styling
import 'normalize.css/normalize.css';
import './styles/index.css';

// Imports for React Dates
import 'react-dates/initialize'; // We need this before we use react-dates
import 'react-dates/lib/css/_datepicker.css';

// My Components
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
