import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () =>
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
  
export default App;
