/* @flow */

import React, { Component } from "react";
import SingleClubResult from "./SingleClubResult";

export default class ClubResultsList extends Component {

  componentDidMount() {
    this.props.setLoading(true);
    return this.fetchResults();
  }

  componentDidUpdate() {
    if (this.props.loading) {
      return this.fetchResults();
    }
  }

  fetchResults() {
    let params = {
      q: this.props.termFilter,
      vibe: this.props.vibesFilter,
      category: this.props.categoriesFilter
    };

    return this.props.fetchClubSearchResults(params).then(() => {
      this.props.setLoading(false);
    });
  }

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
            setLoading={this.props.setLoading}
            setTermFilter={this.props.setTermFilter}
            setVibeFilter={this.props.setVibeFilter}
          />
          <hr />
        </div>
      );
    });

    let displayText;

    if (this.props.loading) {
      displayText = (<div>loading...</div>);
    } else if (this.props.termFilter) {
      displayText = (<div>Displaying results for <span className="searchresults-keyword">{this.props.termFilter}</span> - {clubRows.length} results</div>);
    } else {
      displayText = (<div>Displaying <span className="searchresults-keyword">all clubs</span> - {clubRows.length} results</div>);
    }



    return (
      <div
        style={{ marginTop: "2%" }}
      >
        <h3 className="searchresults-displaying-results-text">
          {displayText}
        </h3>
        {(clubRows.length > 0) ? clubRows : "Sorry, no results were found!"}
      </div>
    );
  }
}
