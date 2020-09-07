import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TaskView } from './container'
import { DEFAULT_URL } from './assets/constants/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={DEFAULT_URL} exact><TaskView /></Route>
      </Switch>
    </Router>
  );
}

export default App;
