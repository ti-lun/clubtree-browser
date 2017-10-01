/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { simpleSearchClub } from "../actions/index";
import { Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router";
import axios from "axios";
import { generateSearchURL } from "./../lib/utils";
import { toggleCategoryFilter } from "../actions/searchResultsActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //Whenever the application senses a change in input (someone presses a key)
    // it will re-render the component to display the updated input
    this.props.setTermFilter(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  returnCorrectSearchButton(searchClass) {
    switch (searchClass) {
      case "front-page-search":
        return <Button className="btn-red">Search</Button>;
      case "results-page-search":
        return <i className="fa fa-search" aria-hidden="true" style={{ color: "#90caf9" }}></i>;
    }
  }

  render() {
    const url = generateSearchURL({
      term: this.props.termFilter,
      category: this.props.categoriesFilter
    });

    const searchButton = (this.props.search) ? (
      <Link to={url}>
        {this.returnCorrectSearchButton(this.props.searchBarStyleClass)}
      </Link>
    ) : null;

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
