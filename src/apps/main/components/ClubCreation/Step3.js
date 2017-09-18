/* @flow */

import _ from "lodash";
import axios from "axios";
import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Textarea from "react-textarea-autosize";

import VibeSelector from "../VibeSelector";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingLocation: "",
      meetingDatesAndTimes: {},
      clubFee: [],
      clubMemberReq: ""
    };
  }

  render () {
    return (
      <div>
        <div className="mild-shadow clubcreation-process-section">
        </div>
        <div className="mild-shadow clubcreation-process-section">
          Personality stuff
        </div>
      </div>

    );
  }
}
