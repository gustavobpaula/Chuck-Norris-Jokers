import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import random from './random';
import categories from './categories';

export default history =>
  combineReducers({
    random,
    categories,
    router: connectRouter(history),
  });
