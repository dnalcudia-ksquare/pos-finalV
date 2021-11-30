import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Invoices from './views/Invoices';
import React from 'react';
import Stats from './views/Stats';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/stats' component={Stats} />
        <Route path='/invoices' component={Invoices} />
      </Switch>
    </Router>
  );
}
export default App;
