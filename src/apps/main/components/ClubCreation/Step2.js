/* @flow */

import _ from "lodash";
import axios from "axios";
import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Textarea from "react-textarea-autosize";

import CategorySelector from "../CategorySelector";

import { toggleClubCategory } from "../../actions/index";
import { MONTHS, VALID_YEARS } from "../../lib/consts";

export default class Step2 extends Component {
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
          <span className="clubcreation-question">Where are your club meetings located?</span>
          <hr />
          <span className="clubcreation-question">Select when your meetings are for the <strong>Fall 2018</strong> quarter.</span>
        </div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question">What are the fees to join your club?</span>
          <hr />
          <span className="clubcreation-question">How does someone become a new member of your club?</span>
        </div>
      </div>
    );
  }
}
