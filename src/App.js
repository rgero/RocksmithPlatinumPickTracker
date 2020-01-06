import React from 'react';
import './styles/App.css';

import 'react-dates/initialize'; // We need this before we use react-dates
import 'react-dates/lib/css/_datepicker.css';

import SongForm from './components/SongForm';

function App() {
  return (
    <div className="App">
      <SongForm />
    </div>
  );
}

export default App;
