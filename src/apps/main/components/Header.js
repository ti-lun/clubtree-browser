/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import logo from "../assets/images/site-logo/entirelogo.png";
import "../assets/css/header.scss";
import PropTypes from "prop-types";

export default class Header extends Component {
  static PropTypes = {
    type: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  generateLinkStyle = (type) => {
    switch (type) {
      case "signup":
        return "signup";
      default:
        return "main";
    }
  }

  render() {
    return (
      <div className="header">
        <Row>
          <Col>
            <img src={logo} width={"50%"} />
          </Col>
          <Col>
            <span className={this.generateLinkStyle(this.props.type)}>
              <span className="explore"><a href="/search">EXPLORE</a></span>&nbsp; | &nbsp;<span className="find"><a href="/advancedsearch">FEATURED</a></span>
            </span>
          </Col>
          { (this.props.type !== "signup") ?
          <Col>
            <Button className="btn-teal">Log in</Button>{" "}
            <Button className="btn-red">Sign up</Button>
          </Col> : null
          }
          <Col>
            <i className="fa fa-2x fa-search" aria-hidden="true" style={{color: "#FFFFFF"}}></i>
          </Col>
        </Row>
      </div>
    );
  }
}
