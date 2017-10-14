export const SIGNIN_FB = "SIGNIN_FB";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";

import axios from "axios";
import { browserHistory } from "react-router";

export function signInFB(dataObj) {
  return function(dispatch) {

    // let's say the api passes and it works hooray.
    // axios.get(`api/members`, {
    //   params: {
    //     fbID: dataObj.fbID
    //   }
    // }).then((response) => {
    //   console.log(response);
    // });

    // then we're gonna post a new user into the database.
    // axios.post(`${ROOT_URL}/signup`, dataObj)
    // .then(response => {
    //   console.log("something happened hooray lol", dataObj);
    // })
    // .catch((err) => {
    //   console.log("crap", err);
    // });

    dispatch({ type: AUTH_USER });
    console.log("dataObj token is", dataObj.token);
    localStorage.setItem("token", dataObj.token);

    browserHistory.push("/");

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
