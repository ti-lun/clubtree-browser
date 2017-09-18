/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { simpleSearchClub } from "../actions/index";
import { Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router";
import axios from "axios";

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
  }

  componentDidMount() {
    axios.get("/api/clubs?q=" + this.props.term).then(data => {
      this.props.simpleSearchClub(data.data);
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.term !== this.props.term) {
      axios.get("/api/clubs?q=" + newProps.term).then(data => {
        this.props.simpleSearchClub(data.data);
      });
    }
  }

  returnCorrectSearchButton(searchClass) {
    switch(searchClass) {
      case "front-page-search":
        return <Button className="btn-red">Search</Button>;
      case "results-page-search":
        return <i className="fa fa-search" aria-hidden="true" style={{color: "#90caf9"}}></i>;
    }
  }

  render() {
    const searchButton = (this.props.search) ? (
      <Link to={`/search?term=${this.state.term}`}>
        { this.returnCorrectSearchButton(this.props.searchBarStyleClass) }
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
          value={this.state.term}
          onChange={this.onInputChange}
          autoFocus={true}
        />
      { searchButton }
      </div>
    );
  }
}

export default connect(null, dispatch =>
  bindActionCreators({ simpleSearchClub }, dispatch)
)(SearchBar);
