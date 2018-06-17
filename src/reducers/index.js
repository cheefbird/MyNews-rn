// @flow

import { combineReducers } from 'redux';

import TopArticlesReducer from './TopArticlesReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  articles: TopArticlesReducer,
  search: SearchReducer,
});
