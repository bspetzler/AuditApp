import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './android/app/src/App';

const Categories = [
    {"Subject":"SPC on Screen"},
    {"Subject":"Cpk Requirements"},
    {"Subject":"Organized Piece Flow"},
    {"Subject":"Tool Condition"},
    {"Subject":"Visual Inspection"},
  ];

  const Location = [
    {"Machine":"1"},
    {"Machine":"2"},
    {"Machine":"6"},
    {"Machine":"4"},
    {"Machine":"28"},
    {"Machine":"3"},
    {"Machine":"30"},
    {"Machine":"7"},
    {"Machine":"8"},
    {"Machine":"9"},
    {"Machine":"5"},
    {"Machine":"35"},
    {"Machine":"34"},
    {"Machine":"33"},
    {"Machine":"29"},
  ];

ReactDOM.render(<App cats={Categories} locs={Location}/>, document.getElementById('root'));

