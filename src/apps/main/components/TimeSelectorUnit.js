/* @flow */
import _ from "lodash";
import React, { Component } from "react";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { HOURS, MINUTES, DAYS, MONTHS, VALID_YEARS } from "../lib/consts";
import {
  updateStartHour,
  updateStartMinute,
  updateStartMeridian,
  updateEndHour,
  updateEndMinute,
  updateEndMeridian,
  insertActiveTimeslot,
  removeActiveTimeslot
} from "../actions/clubCreationActions";

class TimeSelectorUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: null,
      minute: null,
      meridian: null,
      active: false
    };
  }

  componentWillMount() {
    if (_.includes(this.props.schedule.meetingDays, this.props.day)) {
      this.setState({
        active: true
      });
    }
  }

  setActive = () => {
    if (this.state.active === false) {
      this.setState({
        active: true
      });

      this.props.insertActiveTimeslot(this.props.day)
    }
  }

  setInactive = () => {
    this.setState({
      active: false
    });

    this.props.removeActiveTimeslot(this.props.day);

  }

  render () {
    const activeClass = (this.state.active) ? "clubcreation-active-slot" : "clubcreation-inactive-slot";
    return (
      <div
        className={`clubcreation-time-slots ${activeClass}`}
        onClick={this.setActive}
        >
        <Row>
          <Col
            className="clubcreation-day-slot align-middle"
            md={3}>
            {this.props.day}
          </Col>
          <Col
            md={8}>
            <Row>
              <Col><span className="clubcreation-sub">Start</span></Col>
              <Col><span className="clubcreation-sub">End</span></Col>
            </Row>
            <Row>
              <Col>
                <Form
                  inline>
                  <Input
                    type="select"
                    className="clubcreation-date-btn"
                    value={(this.props.schedule[this.props.day]) ? this.props.schedule[this.props.day].start.hour : 1}
                    onChange={(e) => {
                      this.props.updateStartHour(e, this.props.day);
                    }}
                    >
                      { HOURS.map((hour,index) => {
                        return (hour < 13 && hour > 0) ? <option>{hour}</option> : null
                      }) }
                  </Input>
                  <Input
                    type="select"
                    className="clubcreation-date-btn"
                    value={(this.props.schedule[this.props.day]) ? this.props.schedule[this.props.day].start.minute : "00"}

                    onChange={(e) => {
                      this.props.updateStartMinute(e, this.props.day);
                    }}
                    >
                      { MINUTES.map((minutes,index) => {
                        return <option>{minutes}</option>
                      }) }
                  </Input>
                  <Input
                    type="select"
                    className="clubcreation-date-btn"
                    value={(this.props.schedule[this.props.day]) ? this.props.schedule[this.props.day].start.meridian : "AM"}
                    onChange={(e) => {
                      this.props.updateStartMeridian(e, this.props.day);
                    }}
                    >
                      <option>AM</option>
                      <option>PM</option>
                  </Input>
                </Form>
              </Col>
              <Col>
                <Form inline>
                  <Input
                    type="select"
                    className="clubcreation-date-btn"
                    value={ (this.props.schedule[this.props.day]) ? this.props.schedule[this.props.day].end.hour : 1}

                    onChange={(e) => {
                      this.props.updateEndHour(e, this.props.day);
                    }}
                    >
                      { HOURS.map((hour,index) => {
                        return (hour < 13 && hour > 0) ? <option>{hour}</option> : null
                      }) }
                  </Input>
                  <Input
                    type="select"
                    className="clubcreation-date-btn"
                    value={(this.props.schedule[this.props.day]) ? this.props.schedule[this.props.day].end.minute : "00"}
                    onChange={(e) => {
                      this.props.updateEndMinute(e, this.props.day);
                    }}
                    >
                      { MINUTES.map((hour,index) => {
                        return <option>{hour}</option>
                      }) }
                  </Input>
                  <Input
                    type="select"
                    className="clubcreation-date-btn"
                    value={(this.props.schedule[this.props.day]) ? this.props.schedule[this.props.day].end.meridian : "AM"}
                    onChange={(e) => {
                      this.props.updateEndMeridian(e, this.props.day);
                    }}
                    >
                      <option>AM</option>
                      <option>PM</option>
                  </Input>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col
            md={1}
            >
            <Button
              onClick={this.setInactive}>
              <i className="fa fa-minus-circle"
                 aria-hidden="true"
                 ></i>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  dispatch =>
    bindActionCreators({
      updateStartHour,
      updateStartMinute,
      updateStartMeridian,
      updateEndHour,
      updateEndMinute,
      updateEndMeridian,
      insertActiveTimeslot,
      removeActiveTimeslot
    }, dispatch)
)(TimeSelectorUnit);
