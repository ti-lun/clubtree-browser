/* @flow */

import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import logo from "../../assets/images/clubprofile/starcraft-logo.png";

export default class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div style={{
              backgroundImage: `url("http://media.blizzard.com/battle.net/logos/og-sc2-legacy-of-the-void.jpg")`,
              backgroundSize: "cover",
              width: "100%",
              height: "50%",
              position: "absolute",
              top: "0px",
              zIndex: "-9999"
        }}>
        </div>
        <div className="clubprofile-header-module">
          <div className="clubprofile-header-pill"></div>
          <Row className="clubprofile-header">
            <Col md={4}>
              <img
                src={logo}
                className="rounded-circle clubprofile-header-logo"
                >
              </img>
            </Col>
            <Col
              md={8}
              className="clubprofile-header-description">
              <div><span className="clubprofile-header-clubname">UCI StarCraft</span></div>
              <div>Tags</div>
              <div>See club tree</div>
            </Col>
          </Row>
        </div>


      </div>
    );
  }
}
