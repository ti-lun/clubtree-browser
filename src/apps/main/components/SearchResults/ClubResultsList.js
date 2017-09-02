/* @flow */

import React, { Component } from "react";

export default class ClubResultsList extends Component {
  render() {
    return (
      <div>
        <h3>
          Displaying results for: {this.props.term}
        </h3>
      </div>
    );
  }
}
