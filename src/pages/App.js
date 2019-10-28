import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>)
}

export default App;
