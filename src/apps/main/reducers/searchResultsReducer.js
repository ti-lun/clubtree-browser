/* @flow */

import _ from "lodash";
import { SET_TERM_FILTER } from "../actions/searchResultsActions";
import { SIMPLE_SEARCH_CLUB } from "../actions/searchResultsActions";
import { SET_VIBE_FILTER } from "../actions/searchResultsActions";
import { TOGGLE_VIBE_FILTER } from "../actions/searchResultsActions";
import { SET_CATEGORY_FILTER } from "../actions/searchResultsActions";
import { TOGGLE_CATEGORY_FILTER } from "../actions/searchResultsActions";
import { FETCH_CLUB_SEARCH_RESULTS } from "../actions/searchResultsActions";

type State = {
  searchResults: Array,
  termFilter: String,
  categoriesFilter: Array,
  vibesFilter: Array
};

const INITIAL_STATE: State = {
  searchResults: [],
  termFilter: undefined,
  categoriesFilter: [],
  vibesFilter: []
};

export default (
  state: State = INITIAL_STATE,
  action: { type: string, payload?: any }
) => {
  switch (action.type) {
    case SIMPLE_SEARCH_CLUB:
      return { ...state, searchResults: action.payload };
    case SET_CATEGORY_FILTER:
      state = {
        ...state,
        categoriesFilter: action.payload
      };
      return state;
    case SET_VIBE_FILTER:
      state = {
        ...state,
        vibesFilter: action.payload
      };
      return state;
    case TOGGLE_CATEGORY_FILTER:
      if (_.includes(state.categoriesFilter, action.payload)) {
        console.log("removing: " + action.payload);
        state = {
          ...state,
          categoriesFilter: _.without(state.categoriesFilter, action.payload)
        };
      } else {
        console.log("adding: " + action.payload);
        state = {
          ...state,
          categoriesFilter: _.concat(state.categoriesFilter, action.payload)
        };
      }
      return state;
    case TOGGLE_VIBE_FILTER:
      if (_.includes(state.vibesFilter, action.payload)) {
        console.log("removing: " + action.payload);
        state = {
          ...state,
          vibesFilter: _.without(state.vibesFilter, action.payload)
        };
      } else {
        console.log("adding: " + action.payload);
        state = {
          ...state,
          vibesFilter: _.concat(state.vibesFilter, action.payload)
        };
      }
      return state;
    case SET_TERM_FILTER:
      state = {
        ...state,
        termFilter: action.payload
      };
      return state;
    case FETCH_CLUB_SEARCH_RESULTS:
      if (action.payload) {
        state = _.assign({}, state, { searchResults: action.payload.data });
      }
      return state;
    default:
      return state;
  }
};
