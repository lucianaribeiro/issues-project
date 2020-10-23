import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';

export default () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <HomePage {...props} />} />
      </Switch>
    </BrowserRouter>
  );