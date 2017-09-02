import axios from "axios";

export const SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";

export function simpleSearchClub(data: array) {
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: data
  };
}
