/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

import { MONTHS_ABBR } from "../../lib/consts";

export default class SingleEvent extends Component {
  static PropTypes = {
    simplifiedClub: PropTypes.String,
    eventDate: PropTypes.date,
    eventName: PropTypes.String
  };
  
  render () {
    return (
      <div className="events-single-event">
        <div className="events-single-event-header">{ this.props.simplifiedClub }</div>
        <div className="events-single-event-body">
          <Row>
            <Col className="events-date" md={3}>
              <span className="events-date-1">
                { MONTHS_ABBR[this.props.eventDate.getMonth()].toUpperCase() }<br />
              </span>
              <span className="events-date-2">
                {(this.props.eventDate.getDate() < 10) ? "0" + this.props.eventDate.getDate() : this.props.eventDate.getDate()}
              </span>
            </Col>
            <Col md={9}>
              <span className="events-event-name">{ this.props.eventName }</span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
