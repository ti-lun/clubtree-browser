/* @flow */

import React, { Component } from "react";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TimeSelectorUnit from "./TimeSelectorUnit";

import { HOURS, MINUTES, DAYS, MONTHS, VALID_YEARS } from "../lib/consts";

export default class TimeSelector extends Component {

  render () {
    return (
      <div>
        {
          DAYS.map((day, index) => {
            return (
              <TimeSelectorUnit
                day={day}
                schedule={this.props.schedule}
              />
            )
          })
        }
      </div>

  )
  }
}
