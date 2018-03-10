/* @flow */

import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row>
          <Col className="footer-left" md={3}>© 2018</Col>
          <Col className="footer-right" md={9}>
            <Link to="/feedback">Give feedback</Link><br />
            <Link to="/faq">FAQ</Link><br />
            <Link to="/privacy">Privacy stuff</Link><br />
          </Col>
        </Row>
      </div>
    );
  }
}
