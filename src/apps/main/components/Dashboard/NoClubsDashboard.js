/* @flow */

import React, { Component } from "react";

export default class NoClubsDashboard extends Component {
  render () {
    return (
      <div className="noclubs">
        <h2>It seems you haven't made any clubs!</h2>
        Want to create one?  It'll take just about 10 minutes.
      </div>
    );
  }
}
