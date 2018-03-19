/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link, RouterContext, browserHistory } from "react-router";
import { COLORS } from "../../lib/consts";

export default class ProfileHeader extends Component {
  render() {
    const vibes = this.props.vibes.map((vibe, i) => {
      return (
        <span
          className="btn searchresults-vibes-btn"
          style={{
            backgroundColor: COLORS[i]
          }}
          >
          {vibe}
        </span>
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
            zIndex: "-9999",
            backgroundPosition: "center"
          }}
        />
        <div className="clubprofile-header-module">
          <span 
          className="clubprofile-back-button">
            <Link 
            style={{color: "white"}}
            to={"/search"}>⬅ Back to search</Link>
          </span>
          <Row>
            <Col 
              style={{
                textAlign: "right"
              }}
            md={4}>
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
              <a className="clubprofile-header" href="https://goo.gl/forms/0FRLEmavSptOHcQa2" target="/">Claim this club</a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
