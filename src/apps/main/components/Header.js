/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../assets/images/site-logo/clubtree-stroke.png";
import PropTypes from "prop-types";
import { Link } from "react-router";

// need to add the following customizations:
// 1.  logged in
// 2.  static (fixed)
// 3.  font-color customization.

export default class Header extends Component {
  static PropTypes = {
    type: PropTypes.string
  };

  constructor(props) {
    super(props);
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
                <Button className="btn-teal">Log in</Button>{" "}
                <Link to="/joinus">
                  <Button className="btn-red">Join Us</Button>
                </Link>
              </Col>
            : null}
          <Col>
            <i
              className="fa fa-2x fa-search"
              aria-hidden="true"
              style={{ color: "#FFFFFF" }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
