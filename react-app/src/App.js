import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListView from './ListView';
import DetailsPage from './DetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListView} />
        <Route path="/details/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
};

export default App;
