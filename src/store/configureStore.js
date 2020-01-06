import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import songsReducer from '../reducers/songs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      song: songsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
