/* @flow */

import _ from "lodash";
import {
  SET_TERM_FILTER,
  SET_LOADING,
  SIMPLE_SEARCH_CLUB,
  SET_VIBE_FILTER,
  TOGGLE_VIBE_FILTER,
  SET_CATEGORY_FILTER,
  TOGGLE_CATEGORY_FILTER,
  FETCH_CLUB_SEARCH_RESULTS,
  TOGGLE_SEARCH_REF
} from "../actions/searchResultsActions";

type State = {
  loading: Boolean,
  searchResults: Array,
  termFilter: String,
  categoriesFilter: Array,
  vibesFilter: Array
};

const INITIAL_STATE: State = {
  loading: false,
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
    case TOGGLE_SEARCH_REF:
      return { ...state, ref: true};
    case SIMPLE_SEARCH_CLUB:
      return { ...state, searchResults: action.payload };
    case SET_LOADING:
      state = {
        ...state,
        loading: action.payload
      };
      return state;
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
