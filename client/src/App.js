import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import GymsPage from './components/GymsPage';
import EditPage from './components/EditPage';

function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <GymsPage />
        </Route>
        <Route path="/gyms">
          <GymsPage />
        </Route>
        <Router path="/events">
          <div>Coming soon</div>
        </Router>
        <Router path="/edit">
          <EditPage />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
