import axios from "axios";

const CLUB_URL = "/clubs/";
export const SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";

export function simpleSearchClub(query: string) {
  const request = axios.get(`${ CLUB_URL }${ query }`);
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: request
  };
}
