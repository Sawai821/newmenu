import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import {MenuProvider} from './Context';

ReactDOM.render(
  <MenuProvider>
    <Router>
    <App /> 
    </Router>
  </MenuProvider>,
  document.getElementById('root')
);

