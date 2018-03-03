/* @flow */

import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row>
          <Col className="footer-left" md={3}>© 2018</Col>
          <Col className="footer-right" md={9}>
            Give feedback<br />
            About us<br />
            Privacy stuff<br />
          </Col>
        </Row>
      </div>
    );
  }
}
