//Import axios to more easily perform GET requests to API's
import axios from "axios";

const CLUB_URL = "/clubs/";
export const GET_CLUB_DATA = "GET_CLUB_DATA";

export function fetchClubsInfo(searchData) {
  const url = `${CLUB_URL}${searchData}`;
  const fetchData = axios.get(url);

  return {
    type: GET_CLUB_DATA,
    payload: fetchData
  };
}
