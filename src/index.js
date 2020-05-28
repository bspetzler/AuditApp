import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Categories = [
    {"Subject":"SPC"},
    {"Subject":"Inspection"},
    {"Subject":"Dirty Stuff"},
    {"Subject":"Poopsosod"},
    {"Subject":"5"},
  ];

  const Location = [
    {"Machine":"crazy stuff"},
    {"Machine":"2"},
    {"Machine":"3"},
    {"Machine":"4"},
    {"Machine":"5"},
  ];

ReactDOM.render(<App cats={Categories} locs={Location}/>, document.getElementById('root'));

