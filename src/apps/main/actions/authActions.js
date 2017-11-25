export const SIGNIN_FB = "SIGNIN_FB";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";

import axios from "axios";
import { browserHistory } from "react-router";

import { API_URL } from "../lib/consts";

// TODO: need to put fbID into localStorage
export function signInFB(dataObj) {
  return async function (dispatch) {

    await axios.get(`${API_URL}/members`, {
      params: {
        fbID: dataObj.fbID
      }
    }).then((response) => {
      if (response.data.length) {
        localStorage.setItem("_id", response.data[0]["_id"]);
      }
      else {
        axios.post(`${API_URL}/members`, dataObj).then((response) => {
          axios.get(`${API_URL}/members`).then((response) => { console.log(response) });
          localStorage.setItem("_id", response._id);
        }).catch((err) => {
          console.log("crap", err);
        });
      }
    });

    localStorage.setItem("token", dataObj.token);
    localStorage.setItem("profPicURL", dataObj.profPicURL);
    localStorage.setItem("firstName", dataObj.firstName);
    localStorage.setItem("lastName", dataObj.lastName);

    // once localStorage is all set, authenticate the user.
    dispatch({ type: AUTH_USER });

    browserHistory.push("/dashboard");

  }
}

export function authUser() {
  return {
    type: AUTH_USER
  };
}

export function unauthUser() {
  return {
    type: UNAUTH_USER
  };
}
