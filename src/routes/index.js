import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Repository from '../pages/Repository';
// import Main from '../pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Repository} />
      <Route exact path="/repository" component={Repository} />
      <Route exact path="/user" component={Repository} />
    </Switch>
  );
}
