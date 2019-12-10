import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import random from './random';

export default history =>
  combineReducers({
    random,
    router: connectRouter(history),
  });
