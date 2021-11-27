import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const middlewares = [thunk];

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...middlewares)),
    )
    : createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
