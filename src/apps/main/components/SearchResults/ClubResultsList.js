/* @flow */

import React, { Component } from "react";
import SingleClubResult from "./SingleClubResult";

export default class ClubResultsList extends Component {
  render() {
    const clubRows = this.props.searchResults.map((club, index) => {
      return (
        <div key={index} >
          <SingleClubResult
            club={club}
            termFilter={this.props.termFilter}
            vibesFilter={this.props.vibesFilter}
            categoriesFilter={this.props.categoriesFilter}
            fetchClubSearchResults={this.props.fetchClubSearchResults}
            setVibeFilter={this.props.setVibeFilter}
          />
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
