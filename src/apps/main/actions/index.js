/* @flow */

//Import axios to more easily perform GET requests to API's

const CLUB_URL = "/clubs/";
export const SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";
export const ADD_CLUB_CATEGORY = "ADD_CLUB_CATEGORY";

export const simpleSearchClub = function (query: string) {
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: query
  };
}

export const toggleClubCategory = function (category: string) {
  return {
    type: ADD_CLUB_CATEGORY,
    category: category
  };
}
