export const SIGNIN_FB = "SIGNIN_FB";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";

import axios from "axios";
import { browserHistory } from "react-router";

// TODO: need to put fbID into localStorage
export function signInFB(dataObj) {
  return function(dispatch) {

    // let's say the api passes and it works hooray.
    axios.get(`api/members`, {
      params: {
        fbID: dataObj.fbID
      }
    }).then((response) => {
      if (response.data.length) {
        throw Error("user is already in the database");
      }
      else {

        axios.post(`api/members`, dataObj)
        .then(response => {
          axios.get(`api/members`).then((response) => {console.log(response)});
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
