// @flow

import { FETCH_TOP_ARTICLES } from './types';
import { API_TOKEN } from '../config/Network';

const path = `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${API_TOKEN}`;

export const fetchTopArticles = () => {
  return (dispatch) => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        const results = json.articles;

        // TODO: extract this to its own action
        dispatch({
          type: FETCH_TOP_ARTICLES,
          payload: results,
        });
      });
  };
};
