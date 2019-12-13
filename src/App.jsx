import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Load from 'components/pages/Load';
import store, { history } from './store';
import GlobalStyle from './globalStyle';

export const Home = lazy(() => import('components/pages/Home'));
export const Category = lazy(() => import('components/pages/Category'));
export const Page404 = lazy(() => import('components/pages/404'));

export default () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Suspense fallback={<Load />}>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:id" component={Category} />
            <Route path="/404" component={Page404} />
          </Suspense>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </>
);
