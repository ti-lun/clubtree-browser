/* @flow */

import React, { Component } from "react";
import "../../assets/css/signup.scss";

export default class ChooseSignUpOption extends Component {
  render () {
    return (
      <div>
        <button className="btn signUpButton" id="facebook">Join us with Facebook</button>
        <button className="btn signUpButton" id="google">Join us with Google</button>
        <button className="btn signUpButton" id="uci">Join us with your UC Irvine ID</button>
      </div>
    );
  }
}
