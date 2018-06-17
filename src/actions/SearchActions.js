// @flow

import { SEARCH_ARTICLES } from './types';
import { API_TOKEN } from '../config/Network';

export const searchArticles = (query) => {
  const path = `https://newsapi.org/v2/top-headlines?q=${query}&country=us&apiKey=${API_TOKEN}`;

  return (dispatch) => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        const results = json.articles;

        // TODO: extract this to its own action
        dispatch({
          type: SEARCH_ARTICLES,
          payload: results,
        });
      });
  };
};
