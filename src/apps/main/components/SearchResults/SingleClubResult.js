/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import {Link} from "react-router";

export default class SingleClubResult extends Component {
  render() {
    const club = this.props.club;
    const linkName = `/club/${club._id}`;
    return (
      <div className="searchresults-club-result">
        <Row className="searchresults-right-align">
          <Col>
            {club.members.length} members
          </Col>
          <Col>
            Founded {club.foundedYear ? club.foundedYear.substring(0,4) : 'N/A'}
          </Col>
        </Row>
        <Row className="searchresults-right-align">
          <Col>
            <span className="searchresults-clubname">
              <Link to={linkName}>{club.clubName}</Link>
            </span>
          </Col>
        </Row>
        <div
          style={{
            backgroundImage: `url(${_.get(club, 'clubCover')})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            padding: "15px"
          }}
        >
          <Row>
            <Col>
              <Link to={linkName}><img src={_.get(club, 'clubLogo')} width="150px" /></Link>
            </Col>
            <Col>
              {club.vibes.map((vibe, index) => {
                return (
                  <Button key={index} className="btn searchresults-vibes-btn">
                    {vibe}
                  </Button>
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
