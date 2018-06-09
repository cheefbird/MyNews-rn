import { combineReducers } from 'redux';

import TopArticlesReducer from './TopArticlesReducer';

export default combineReducers({
  topArticles: TopArticlesReducer,
});
