import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import CongressView from './CongressView/CongressView';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={CongressView} />
    </Router>)
}

export default App;
