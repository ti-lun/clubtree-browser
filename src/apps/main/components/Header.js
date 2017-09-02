/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../assets/images/site-logo/clubtree-stroke.png";
import PropTypes from "prop-types";

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
      <div className="header">
        <Row>
          <Col>
            <img src={logo} width={"50%"} />
          </Col>
          <Col>
            <span className={this.generateLinkStyle(this.props.type)}>
              <span className="header-explore">
                <a href="/search">EXPLORE</a>
              </span>&nbsp; | &nbsp;<span className="header-find">
                <a href="/advancedsearch">FEATURED</a>
              </span>
            </span>
          </Col>
          {this.props.type !== "signup"
            ? <Col>
                <Button className="btn-teal">Log in</Button>{" "}
                <Button className="btn-red">Sign up</Button>
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
