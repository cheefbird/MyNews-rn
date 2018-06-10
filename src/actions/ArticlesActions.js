// @flow

import { FETCH_TOP_ARTICLES } from './types';
import { API_TOKEN } from '../config/Network';

export const fetchTopArticles = () => {
  return dispatch => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=01c6d185b0bb4b58942fd26b113f17e5',
    )
      .then(response => response.json())
      .then(json => {
        const { articles } = json;
        console.log(articles);

        // TODO: extract this to its own action
        dispatch({
          type: FETCH_TOP_ARTICLES,
          payload: articles,
        });
      });
  };
};

// export function fetchTopArticles() {
//   return function(dispatch) {
//     return fetch(
//       `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${secret}`,
//     )
//       .then(response => response.json(), error => console.log('AN ERROR OCCURRED!', error))
//       .then(json => {
//         const { articles } = json.data;
//         console.log(articles);
//
//         // TODO: extract this to its own action
//         dispatch({
//           type: FETCH_TOP_ARTICLES,
//           payload: articles,
//         });
//       });
//   };
// }
