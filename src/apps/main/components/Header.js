/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../assets/images/site-logo/clubtree-stroke.png";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderSearchBar from "./HeaderSearchBar";

import {
  setLoading,
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
    showSearch: PropTypes.boolean,
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
      case "safe":
        return "header-safe";
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
        <Row style={{
          display: "flex",
          alignItems: "center"
        }}
        
        >
          <Col md={4}>
            <Link to="/">
              <img src={logo} width={"50%"} />
            </Link>
          </Col>
          <Col md={4}>
            <HeaderSearchBar
              show={this.props.showSearch}
              termFilter={this.props.termFilter}
              vibesFilter={this.props.vibesFilter}
              categoriesFilter={this.props.categoriesFilter}
              setLoading={this.props.setLoading}
              setTermFilter={this.props.setTermFilter}
              fetchClubSearchResults={this.props.fetchClubSearchResults}
            />
          </Col>
          <Col md={3}>
            <span className={this.generateLinkStyle(this.props.type)}>
              <span className="header-btn-1">
                <Link to="/about">ABOUT</Link>
              </span>
              <span className="header-btn-1">
                <Link to="/advancedsearch">EXPLORE</Link>
              </span>
            </span>
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
    vibesFilter: state.searchResultsReducer.vibesFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter,
    authenticated: state.authReducer.authenticated
  }),
  dispatch => bindActionCreators({
    setLoading,
    setTermFilter,
    fetchClubSearchResults,
    unauthUser
  }, dispatch)
)(Header);
