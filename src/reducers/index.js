import { combineReducers } from 'redux';

import TopArticlesReducer from './TopArticlesReducer';

export default combineReducers({
  articles: TopArticlesReducer,
});
