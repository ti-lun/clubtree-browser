/* @flow */

import React, { Component } from "react";
import { Row, Col, Progress } from "reactstrap";
export default class ClubCreationHeader extends Component {
  render() {
    return (
      <div>
        <div className="clubcreation-header">
          <div className="clubcreation-header-content">
            <Row>
              <Col>
                <span className="clubcreation-header-title">Create a club</span>
              </Col>
              <Col>
                <Row className="clubcreation-header-right">
                  <Col>
                    <Progress value={this.props.completed * (100 / 4)} />
                  </Col>
                </Row>
                <Row className="clubcreation-header-right">
                  <Col sm={4}>
                    <span
                      className="clubcreation-sub"
                      style={{ float: "left" }}
                    >
                      {this.props.completed * (100 / 4)}% completed
                    </span>
                  </Col>
                  <Col sm={8}>
                    <span
                      className="clubcreation-sub"
                      style={{ float: "right" }}
                    >
                      Your changes are saved on every page completed.
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
