/* @flow */

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div style={{ float: "left" }}>© 2017</div>
        <div style={{ float: "right" }}>
          Contact Us&nbsp;|&nbsp;FAQ&nbsp;|&nbsp;About Us
        </div>
      </div>
    );
  }
}
