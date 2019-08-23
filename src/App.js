import React from 'react';
import Main from './components/MainComponent';
import { Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import history from './history';

const store = ConfigureStore();

const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <Main/>
    </Router>
  </Provider>
  
export default App;
