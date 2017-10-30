/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import { COLORS } from "../../lib/consts";

export default class ProfileHeader extends Component {
  render() {
    const vibes = this.props.vibes.map((vibe, i) => {
      return (
        <Button
          className="btn searchresults-vibes-btn"
          style={{
            backgroundColor: COLORS[i]
          }}
          >
          {vibe}
        </Button>
      )});


    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${this.props.cover})`,
            backgroundSize: "cover",
            width: "100%",
            height: "50%",
            position: "absolute",
            top: "0px",
            zIndex: "-9999"
          }}
        />
        <div className="clubprofile-header-module">
          <div className="clubprofile-header-pill" />
          <Row className="clubprofile-header">
            <Col md={4}>
              <img
                src={this.props.logo}
                className="rounded-circle clubprofile-header-logo"
              />
            </Col>
            <Col md={8} className="clubprofile-header-description">
              <div>
                <span className="clubprofile-header-clubname">
                {this.props.clubName}
                </span>
              </div>
              <div>{ vibes }</div>
              <div>See club tree</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
