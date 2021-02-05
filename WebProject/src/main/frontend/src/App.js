<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { Component} from 'react';
>>>>>>> ee323a3... [Test1] frontend
=======
import React from 'react';
>>>>>>> 6a0bd33... [setting] test1
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Result from './Pages/Result';

<<<<<<< HEAD
<<<<<<< HEAD
const App = () => {
=======
class App extends React.Component {
  render() {
>>>>>>> ee323a3... [Test1] frontend
=======
const App = () => {
>>>>>>> 6a0bd33... [setting] test1
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Question1} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path="/Question2/:answer" component={Question2} />
          <Route exact path="/Result/:answer" component={Result} />
=======
          <Route exact path="/Question2" component={Question2} />
          <Route exact path="/Result" component={Result} />
>>>>>>> ee323a3... [Test1] frontend
=======
          <Route exact path="/Question2/:answer" component={Question2} />
          <Route exact path="/Result/:answer" component={Result} />
>>>>>>> 6a0bd33... [setting] test1
        </Switch>
      </Router>

    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> ee323a3... [Test1] frontend
=======
>>>>>>> 6a0bd33... [setting] test1

export default App;
