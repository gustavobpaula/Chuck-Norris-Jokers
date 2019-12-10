import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './redux-flow';
import GlobalStyle from './globalStyle';

export const Home = lazy(() => import('components/pages/Home'));

export default () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route exact path="/">
              <Home />
            </Route>
          </Suspense>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </>
);
