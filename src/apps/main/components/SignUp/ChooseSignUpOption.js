/* @flow */

import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signInFB } from "../../actions/authActions";

class ChooseSignUpOption extends Component {
  responseFacebook = (response) => {
    console.log("response from FB is", response);
    const nameArr = response.name.split();
    const dataObj = {
      firstName: nameArr[0],
      lastName: nameArr[1],
      profPicURL: response.picture.data.url,
      fbID: response.userID,
      token: response.accessToken
    };

    console.log("dataobj is", dataObj);

    this.props.signInFB(dataObj);
  }

  render() {
    return (
      <div>
        <button className="btn joinus-signUpButton" id="joinus-facebook">
          <FacebookLogin
            appId="469991373333039"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook} />
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

export default connect(
  () => ({}),
  dispatch =>
    bindActionCreators({
      signInFB
    }, dispatch)
)(ChooseSignUpOption);
