/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../assets/images/site-logo/clubtree-stroke.png";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBar from "./SearchBar";

import {
  setTermFilter,
  fetchClubSearchResults,
} from "../actions/searchResultsActions";

import { unauthUser } from "../actions/authActions";

// need to add the following customizations:
// 1.  logged in
// 2.  static (fixed)
// 3.  font-color customization.

class Header extends Component {
  static PropTypes = {
    type: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      profPicURL: ""
    };
  }

  componentDidMount() {
    this.setState({
      profPicURL: localStorage.getItem("profPicURL")
    });
  }

  generateLinkStyle = type => {
    switch (type) {
      case "signup":
        return "header-signup";
      default:
        return "header-main";
    }
  };

  optionalColor = () => {
    const thisPage = this.props.type;
    switch (this.props.type) {
      case "dashboard":
        return "header-dashboard";
      default:
        return "";
    }
  }

  render() {
    return (
      <div className={`header-float ${this.optionalColor()}`}>
        <Row>
          <Col md={4}>
            <Link to="/">
              <img src={logo} width={"50%"} />
            </Link>
          </Col>
          <Col md={2}>
            <span className={this.generateLinkStyle(this.props.type)}>
              <span className="header-explore">
                <Link to="/advancedsearch">EXPLORE</Link>
              </span>
            </span>
          </Col>
          <Col md={5}>
            <SearchBar
              searchBarStyleClass="header-page-search"
              termFilter={this.props.termFilter}
              categoriesFilter={this.props.categoriesFilter}
              setTermFilter={this.props.setTermFilter}
              fetchClubSearchResults={this.props.fetchClubSearchResults}
              search={true}
            />
          </Col>
          <Col md={1}>
            <Link to="/dashboard">
              <img src={(this.props.authenticated) ? this.state.profPicURL : null} className="rounded-circle" />
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    termFilter: state.searchResultsReducer.termFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter,
    authenticated: state.authReducer.authenticated
  }),
  dispatch => bindActionCreators({
    setTermFilter,
    fetchClubSearchResults,
    unauthUser
  }, dispatch)
)(Header);
