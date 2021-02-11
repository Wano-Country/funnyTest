
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Result from './Pages/Result';


const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Question1} />
          <Route exact path="/Question2/:points" component={Question2} />
          <Route exact path="/Result/:points" component={Result} />
        </Switch>
      </Router>

    )
  }


export default App;
