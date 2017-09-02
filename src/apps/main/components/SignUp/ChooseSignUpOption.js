/* @flow */

import React, { Component } from "react";

export default class ChooseSignUpOption extends Component {
  render() {
    return (
      <div>
        <button className="btn joinus-signUpButton" id="joinus-facebook">
          Join us with Facebook
        </button>
        <button className="btn joinus-signUpButton" id="joinus-google">
          Join us with Google
        </button>
        <button className="btn joinus-signUpButton" id="joinus-uci">
          Join us with your UC Irvine ID
        </button>
      </div>
    );
  }
}
