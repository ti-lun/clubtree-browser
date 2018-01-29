/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router";
import axios from "axios";
import { generateSearchURL } from "./../lib/utils";

// this.props.searchBarStyleId
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    //Whenever the application senses a change in input (someone presses a key)
    // it will re-render the component to display the updated input
    if (event.target.value === "") {
      this.props.setTermFilter(undefined);
    } else {
      this.props.setTermFilter(event.target.value);
    }
  }

  returnCorrectSearchButton(searchClass) {
    switch (searchClass) {
      case "front-page-search":
        return <Button className="btn-red">Search</Button>;
      case "results-page-search":
        return <i className="fa fa-search" aria-hidden="true" style={{ color: "#90caf9" }}></i>;
      case "header-page-search":
        return <i className="fa fa-2x fa-search" aria-hidden="true" style={{ color: "#ff3823" }} />
    }
  }

  render() {
    const query = {
      q: this.props.termFilter,
      vibe: this.props.vibesFilter,
      category: this.props.categoriesFilter
    };

    const url = generateSearchURL(query);

    const searchButton = (
      <Link
        to={url}
        onClick={() => this.props.search ? this.props.fetchClubSearchResults(query) : null}
      >
        {this.returnCorrectSearchButton(this.props.searchBarStyleClass)}
      </Link >
    );

    return (
      <div className="text-center">
        <Input
          type="text"
          placeholder={
            this.props.searchBarStyleClass === "frontPageSearch"
              ? "Search for clubs@UCI:"
              : null
          }
          className={this.props.searchBarStyleClass}
          value={this.props.termFilter}
          onChange={this.onInputChange}
          autoFocus={true}
        />
        {searchButton}
      </div>
    );
  }
}

export default SearchBar;
