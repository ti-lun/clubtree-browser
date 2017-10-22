/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../assets/images/site-logo/clubtree-stroke.png";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

  render() {
    return (
      <div className="header-float">
        <Row>
          <Col>
            <Link to="/">
              <img src={logo} width={"50%"} />
            </Link>
          </Col>
          <Col>
            <span className={this.generateLinkStyle(this.props.type)}>
              <span className="header-explore">
                <Link to="/search">EXPLORE</Link>
              </span>&nbsp; | &nbsp;<span className="header-find">
                <Link to="/advancedsearch">FEATURED</Link>
              </span>
            </span>
          </Col>
          {this.props.type !== "signup"
            ? <Col>
                {(this.props.authenticated) ?
                  (
                      <Button
                        onClick={this.props.unauthUser}
                        className="btn">Log out</Button>
                  )
                   :

                  (<Link to="/joinus">
                  <Button className="btn-red">Log in</Button>
                  </Link>)
                  }
              </Col>
            : null}
          <Col>
            <i
              className="fa fa-2x fa-search"
              aria-hidden="true"
              style={{ color: "#FFFFFF" }}
            />
          </Col>
          <Col>
            <Link to="/dashboard">
              <img src={(this.props.authenticated) ? this.state.profPicURL : null} className="rounded-circle"/>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    authenticated: state.authReducer.authenticated
  }),
  dispatch => bindActionCreators({
    unauthUser
  }, dispatch)
)(Header);
