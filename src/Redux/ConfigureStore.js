import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rocketsReducer from './rockets/rockets';
import dragonReducer from './dragons/dragons';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionsReducer,
  dragons: dragonReducer,
  rockets: rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
