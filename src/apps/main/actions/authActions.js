export const SIGNIN_FB = "SIGNIN_FB";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";

import axios from "axios";
import { browserHistory } from "react-router";
import { API_URL } from "../lib/consts";

// TODO: need to put fbID into localStorage
export function signInFB(dataObj) {
  return function(dispatch) {

    // first check to see if we have this user already
    // if we do, then no need to make a new Clubtree user.
    axios.get(`${API_URL}/members`, {
      params: {
        fbID: dataObj.fbID
      }
    }).then((response) => {
      if (response.data.length) {
        localStorage.setItem("_id", response.data[0]["_id"]);
      }
      else {
        axios.post(`${API_URL}/members`, dataObj)
        .then(response => {
          // we really need to test this
          localStorage.setItem("_id", response["_id"]);
          axios.get(`${API_URL}/members`).then((response) => {console.log(response)});
          console.log("something happened hooray lol", dataObj);
        })
        .catch((err) => {
          console.log("crap", err);
        });
      }
    });

    dispatch({ type: AUTH_USER });
    console.log("dataObj token is", dataObj.token);
    localStorage.setItem("token", dataObj.token);
    localStorage.setItem("profPicURL", dataObj.profPicURL);


    browserHistory.push("/dashboard");

  }
}

export function authUser() {
  browserHistory.push("/");
  return {
    type: AUTH_USER
  };
}

export function unauthUser() {
  return {
    type: UNAUTH_USER
  };
}
