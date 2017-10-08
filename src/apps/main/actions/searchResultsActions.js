import qs from "qs";
import axios from "axios";

export const SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";
export const TOGGLE_VIBE_FILTER = "TOGGLE_VIBE_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const TOGGLE_CATEGORY_FILTER = "TOGGLE_CATEGORY_FILTER";
export const SET_TERM_FILTER = "SET_TERM_FILTER";
export const FETCH_CLUB_SEARCH_RESULTS = "FETCH_CLUB_SEARCH_RESULTS";

export function simpleSearchClub(data: array) {
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: data
  };
}

export function fetchClubSearchResults(params: object) {
  const paramsSerializer = function (params) {
    let paramString = qs.stringify(params, { arrayFormat: 'repeat' });
    return paramString;
  }
  let request = axios.get("/api/clubs", { params, paramsSerializer });
  return {
    type: FETCH_CLUB_SEARCH_RESULTS,
    promise: request
  };
}

export function setTermFilter(term: string) {
  return {
    type: SET_TERM_FILTER,
    payload: term
  };
}

export function setCategoryFilter(filter: array) {
  return {
    type: SET_CATEGORY_FILTER,
    payload: filter
  };
}

export function toggleCategoryFilter(category: string) {
  return {
    type: TOGGLE_CATEGORY_FILTER,
    payload: category
  };
}

export function toggleVibeFilter(vibe: string) {
  return {
    type: TOGGLE_VIBE_FILTER,
    payload: vibe
  };
}
