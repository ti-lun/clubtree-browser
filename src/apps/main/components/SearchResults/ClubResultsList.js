/* @flow */

import React, { Component } from "react";
import SingleClubResult from "./SingleClubResult";

export default class ClubResultsList extends Component {

  componentDidMount() {
    return this.fetchResults();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.searchResults !== nextProps.searchResults;
  }

  fetchResults() {
    let params = {
      q: this.props.termFilter,
      vibe: this.props.vibesFilter,
      category: this.props.categoriesFilter
    };

    return this.props.fetchClubSearchResults(params);
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
            setTermFilter={this.props.setTermFilter}
            setVibeFilter={this.props.setVibeFilter}
          />
          <hr />
        </div>
      );
    });

    let displayText;

    if (this.props.term) {
      displayText = (<div>Displaying results for <span className="searchresults-keyword">{this.props.term}</span> - {clubRows.length} results</div>);
    }
    else {
        displayText = (<div>Displaying <span className="searchresults-keyword">all clubs</span> - {clubRows.length} results</div>);
    }



    return (
      <div
        style={{marginTop: "2%"}}
      >
        <h3 className="searchresults-displaying-results-text">
          { displayText }
        </h3>
        {(clubRows.length > 0) ? clubRows : "Sorry, no results were found!"}
      </div>
    );
  }
}
