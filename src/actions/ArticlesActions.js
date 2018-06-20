// @flow

import { FETCH_TOP_ARTICLES } from './types';
import { API_TOKEN, NYT_API_TOKEN } from '../config/Network';

const path = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYT_API_TOKEN}`;

export const fetchTopArticles = () => {
  return (dispatch) => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        const articles = json.results;

        // TODO: extract this to its own action
        dispatch({
          type: FETCH_TOP_ARTICLES,
          payload: articles,
        });
      });
  };
};
