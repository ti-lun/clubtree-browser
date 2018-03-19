import qs from "qs";
import axios from "axios";
import Promise from "bluebird";

import { API_URL } from "../lib/consts";

export const TOGGLE_SEARCH_REF = "TOGGLE_SEARCH_REF";
export const SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";
export const SET_LOADING = "SET_LOADING";
export const TOGGLE_VIBE_FILTER = "TOGGLE_VIBE_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const SET_VIBE_FILTER = "SET_VIBE_FILTER";
export const TOGGLE_CATEGORY_FILTER = "TOGGLE_CATEGORY_FILTER";
export const SET_TERM_FILTER = "SET_TERM_FILTER";
export const FETCH_CLUB_SEARCH_RESULTS = "FETCH_CLUB_SEARCH_RESULTS";

export function toggleSearchRef() {
  return {
    type: TOGGLE_SEARCH_REF
  };
}

export function simpleSearchClub(data: array) {
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: data
  };
}

export function setLoading(data: boolean) {
  return {
    type: SET_LOADING,
    payload: data,
  }
}

// deprecated
export function fetchClubSearchResults(params: object) {
  console.log("received", params);
  params = _.assign(params, { sort: 'relevance' });
  const paramsSerializer = function (params) {
    let paramString = qs.stringify(params, { arrayFormat: 'repeat' });
    return paramString;
  }
  let request = Promise.try(function () {
    return axios.get(`${API_URL}/clubs`, { params, paramsSerializer });
  }).delay(1000);
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

export function setVibeFilter(filter: array) {
  return {
    type: SET_VIBE_FILTER,
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
