/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router";
import OnlyVibeFilterButton from "./OnlyVibeFilterButton";

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
            Founded {club.foundedYear ? club.foundedYear.substring(0, 4) : 'N/A'}
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
              <Link to={linkName}>
                <img
                  src={_.get(club, 'clubLogo')}
                  width="140px"
                  className="rounded-circle"
                  style={{
                    margin: "10px",
                    border: "3px white solid"
                  }}
                />
              </Link>
            </Col>
            <Col>
              {club.vibes.map((vibe, index) => {
                return (
                  <OnlyVibeFilterButton
                    key={index}
                    label={vibe}
                    className="btn searchresults-vibes-btn"
                    termFilter={this.props.termFilter}
                    categoriesFilter={this.props.categoriesFilter}
                    vibesFilter={this.props.vibesFilter}
                    fetchClubSearchResults={this.props.fetchClubSearchResults}
                    setTermFilter={this.props.setTermFilter}
                    setVibeFilter={this.props.setVibeFilter}
                  >
                    {vibe}
                  </OnlyVibeFilterButton>
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
