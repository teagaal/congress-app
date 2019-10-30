import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import CongressView from './CongressView/CongressView';
import DetailView from './DetailView/DetailView';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={CongressView} />
      <Route exact path="/detail" component={DetailView}/>
    </Router>)
}

export default App;
