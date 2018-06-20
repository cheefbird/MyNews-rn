// @flow

import { SEARCH_ARTICLES, SEARCH_RETURNS_NOTHING } from './types';
import { API_TOKEN } from '../config/Network';

export const searchArticles = (query) => {
  const path = `https://newsapi.org/v2/top-headlines?q=${query}&country=us&pageSize=50&apiKey=${API_TOKEN}`;

  return (dispatch) => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        const results = json.articles;

        if (results.length == 0) {
          searchReturnedNothing(dispatch, query);
        } else {
          // TODO: extract this to its own action
          dispatch({
            type: SEARCH_ARTICLES,
            payload: results,
          });
        }
      });
  };
};

export const searchReturnedNothing = (dispatch, query) => {
  dispatch({ type: SEARCH_RETURNS_NOTHING, payload: query });
};
