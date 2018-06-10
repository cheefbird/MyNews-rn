// @flow

import { FETCH_TOP_ARTICLES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TOP_ARTICLES:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
