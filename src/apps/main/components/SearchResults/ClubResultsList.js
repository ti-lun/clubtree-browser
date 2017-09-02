/* @flow */

import React, { Component } from "react";
import SingleClubResult from "./SingleClubResult";

export default class ClubResultsList extends Component {
  render() {
    const clubRows = this.props.searchResults.map((club, index) => {
      return (
        <div>
          <SingleClubResult club={club} />
          <hr />
        </div>
      );
    });

    return (
      <div>
        <h3>
          Displaying results for: {this.props.term}
        </h3>
        {clubRows}
      </div>
    );
  }
}
