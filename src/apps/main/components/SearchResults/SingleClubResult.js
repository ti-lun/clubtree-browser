/* @flow */

import React, { Component } from "react";
import {Row, Col, Button} from "reactstrap";

export default class SingleClubResult extends Component {
  render() {
    const club = this.props.club;
    return (
      <div className="searchresults-club-result">
        <Row className="searchresults-right-align">
          <Col>{club.members.length} members</Col>
          <Col>Founded {club.foundedYear}</Col>
        </Row>
        <Row className="searchresults-right-align">
          <Col>
            <span className="searchresults-clubname">{club.clubName}</span>
          </Col>
        </Row>
        <div style={{
            backgroundImage: `url(${club.imageURLs.cover})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            padding: "15px",
          }}>
          <Row>
            <Col><img src={club.imageURLs.logo} width="150px"></img></Col>
            <Col>
              {
                club.vibes.map((vibe, index) => {
                  return (
                    <Button
                      key={index}
                      className="btn searchresults-vibes-btn">{vibe}</Button>
                  );
                })
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
