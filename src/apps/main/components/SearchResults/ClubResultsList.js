/* @flow */

import qs from "qs";
import axios from "axios";
import React, { Component } from "react";
import SingleClubResult from "./SingleClubResult";
import { API_URL } from "../../lib/consts";

export default class ClubResultsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  componentDidMount() {
    if (this.props.loading) {
      return this.fetchResults();
    }
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
      category: this.props.categoriesFilter,
      pageNumber: this.props.pageNumber
    };

    params = _.assign(params, { sort: 'relevance' });
    const paramsSerializer = function (params) {
      let paramString = qs.stringify(params, { arrayFormat: 'repeat' });
      return paramString;
    }
    let request = Promise.try(function () {
      return axios.get(`${API_URL}/clubs`, { params, paramsSerializer });
    }).then((res) => {
      this.props.setLoading(false);
      this.setState({ searchResults: res.data });
    });
  }

  render() {
    const clubRows = this.state.searchResults.map((club, index) => {
      return (
        <div key={index} >
          <SingleClubResult
            club={club}
            termFilter={this.props.termFilter}
            vibesFilter={this.props.vibesFilter}
            categoriesFilter={this.props.categoriesFilter}
            setLoading={this.props.setLoading}
            setTermFilter={this.props.setTermFilter}
            setVibeFilter={this.props.setVibeFilter}
          />
          <hr />
        </div>
      );
    });

    let displayText;
    let loadingScreen;

    if (this.props.loading) {
      displayText = (<span className="searchresults-loading-text">loading...</span>);
      loadingScreen = "searchresults-loading-filter";
    } else if (this.props.termFilter) {
      displayText = (<span className="searchresults-loading-text">Displaying results for <span className="searchresults-keyword">{this.props.termFilter}</span> - {clubRows.length} results</span>);

    } else {
      displayText = (<span className="searchresults-loading-text">Displaying <span className="searchresults-keyword">all clubs</span> - {clubRows.length} results</span>);
    }

    let categoriesText = "";

    if (this.props.categoriesFilter.length > 0) {
      this.props.categoriesFilter.forEach((category, index) => {
        categoriesText += category;
        if (index != this.props.categoriesFilter.length - 1) {
          categoriesText += " and ";
        }
      });
    }


    return (
      <div
        style={{ marginTop: "2%" }}
      >
        <h3 className="searchresults-displaying-results-text">
          {displayText}
        </h3>
        <span className="searchresults-cat-details">{categoriesText}</span>
        <div
          style={{ transition: "1s" }}
          className={loadingScreen}>
          {(clubRows.length > 0) ? clubRows : "Sorry, no results were found!  Try another search query."}
        </div>
      </div>
    );
  }
}
