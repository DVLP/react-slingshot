import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ExamplePage from './containers/ExamplePage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ExamplePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
