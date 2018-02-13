/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router";
import { browserHistory } from "react-router";

import axios from "axios";


class SearchBar extends Component {

  onInputChange = (event) => {
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
        return <div><br /><Button className="btn-red">Search</Button></div>;
      case "results-page-search":
        return <i className="fa fa-search" aria-hidden="true" style={{ color: "#90caf9" }}></i>;
      case "header-page-search":
        return <i className="fa fa-2x fa-search" aria-hidden="true" style={{ color: "#ff3823" }} />
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      browserHistory.push("/search");
    }
  }

  render() {

    const searchButton = (
      <Link to={"/search"} >
        {this.returnCorrectSearchButton(this.props.searchBarStyleClass)}
      </Link >
    );

    return (
      <div className="text-center">
        <input
          type="text"
          onKeyPress={this.handleKeyPress}
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
