// @flow

import { SEARCH_ARTICLES, SEARCH_RETURNS_NOTHING } from '../actions/types';

const INITIAL_STATE = {
  results: [],
  infoText: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ARTICLES:
      return { ...INITIAL_STATE, results: action.payload };

    case SEARCH_RETURNS_NOTHING:
      return {
        ...INITIAL_STATE,
        infoText: `Your search for ${
          action.payload
        } returned 0 results. Please try again.`,
      };

    default:
      return state;
  }
};
