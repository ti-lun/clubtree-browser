/* @flow */

import { SIMPLE_SEARCH_CLUB } from "../actions/searchResultsActions";

type State = {
  searchResults: Array,
  categoriesFilter: Array,
  vibesFilter: Array
}

const INITIAL_STATE: State = {
  searchResults: [],
  categoriesFilter: [],
  vibesFilter: []
};

export default (state: State = INITIAL_STATE, action: { type: string, payload?: any }) => {
  switch (action.type) {
    case SIMPLE_SEARCH_CLUB:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};
