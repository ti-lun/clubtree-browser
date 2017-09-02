/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { simpleSearchClub } from "../actions/index";
import { Input, Button, Row, Col } from "reactstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //Whenever the application senses a change in input (someone presses a key)
    // it will re-render the component to display the updated input
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //We want the application to fetch information from our club API and display
    //information tailored to the user's inputted search parameters. We also
    //make sure to clear the search bar, so that the user can more easily make
    //another search request w/o having to delete their previous query
    this.props.simpleSearchClub(this.state.term);

    this.setState({ term: "" });
  }

  render() {
    const searchButton =
      this.props.searchBarStyleId === "search"
        ? <a href={`/search?term=${this.state.term}`}>
            <Button className={"btn-red"}>Search</Button>
          </a>
        : null;

    return (
      <div className="text-center">
        <Input
          type="text"
          placeholder={
            this.props.searchBarStyleId === "search"
              ? "Search for clubs@UCI:"
              : null
          }
          id={this.props.searchBarStyleId}
          value={this.state.term}
          onChange={this.onInputChange}
          autoFocus={true}
        />
        {searchButton}
      </div>
    );
  }
}

export default connect(null, dispatch =>
  bindActionCreators({ simpleSearchClub }, dispatch)
)(SearchBar);
