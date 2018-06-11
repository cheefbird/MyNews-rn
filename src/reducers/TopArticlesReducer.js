// @flow

import { FETCH_TOP_ARTICLES } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_ARTICLES:
      return action.payload;

    default:
      return state;
  }
};
