import React from 'react';
import Main from './components/MainComponent';
import { Router } from 'react-router-dom';
import './App.css';
import history from './history';

const App = () =>
  <Router history={history}>
    <Main/>
  </Router>
  
export default App;
