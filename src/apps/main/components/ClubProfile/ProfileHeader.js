/* @flow */

import React, { Component } from "react";

export default class ProfileHeader extends Component {
  render() {
    return (
      <div className="col-xs-12 clubprofileheader">
        <div className="col-xs-4">
          <div className="clubprofilelogo">
            <img
              className="img-fluid"
              style={{ "max-width": "100%", height: "auto" }}
              src="/images/clubprofile/starcraft-logo.png"
            />{" "}
          </div>
        </div>
        <div className="col-xs-8 clubprofilename"> profilename </div>
      </div>
    );
  }
}
