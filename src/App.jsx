import React, { Suspense, lazy, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Load from 'components/pages/Load';
import store, { history } from './store';
import GlobalStyle from './globalStyle';

export const Home = lazy(() => import('components/pages/Home'));
export const Category = lazy(() => import('components/pages/Category'));
export const Page404 = lazy(() => import('components/pages/404'));

export default () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    window?.opener &&
      setTimeout(() => {
        // eslint-disable-next-line no-unused-expressions
        window?.opener?.showChildMessage(
          'O modal do chuck norris acabou de ser fechado'
        );
        // eslint-disable-next-line no-unused-expressions
        window?.close();
      }, 5000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<Load />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category/:id" component={Category} />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </Provider>
    </>
  );
};
