/* @flow */

import _ from "lodash";
import axios from "axios";
import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import TimePicker from "rc-time-picker";

import CategorySelector from "../CategorySelector";
import TimeSelector from "../TimeSelector";

import {
  updateClubMeetingLocation,
  updateClubFeeAmount,
  updateClubFeePeriod,
  updateClubMemReqs

 } from "../../actions/clubCreationActions";
import {
  CLUB_MEETING_LOC_CHAR_LENGTH,
  HOURS,
  MINUTES,
  DAYS,
  MONTHS,
  VALID_YEARS } from "../../lib/consts";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingLocation: "",
      meetingDatesAndTimes: {},
      clubFee: [],
      clubMemberReq: ""
    };
  }

  validateMeetingLoc = () => {
    return (this.props.newClub.meetingLocation.length <= CLUB_MEETING_LOC_CHAR_LENGTH)
    && (this.props.newClub.meetingLocation.length !== 0);
  }

  render () {
    return (
      <div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question">Where are your club meetings located?</span>
            <input
              type="text"
              className="clubcreation-input"
              onChange={this.props.updateClubMeetingLocation}
              value={this.props.newClub.meetingLocation}
            />
            <span
              className={(this.validateMeetingLoc()) ? "clubcreation-sub" : "clubcreation-sub clubcreation-error"}
              style={{
                float: "right",
                margin: "5px 0px 5px 0px"
              }}
            >
              {this.props.newClub.meetingLocation.length}/{CLUB_MEETING_LOC_CHAR_LENGTH} characters
            </span>
          <span className="clubcreation-sub">An example is, "HIB 100" or "The biggest tree at Aldrich Park"</span>
          <hr />


          <span className="clubcreation-question">Select when your meetings are for the <strong>Fall 2018</strong> quarter.</span>
          <TimeSelector
            schedule={this.props.newClub.meetingDatesAndTimes}
            />
      </div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question">What are the fees to join your club?</span>
          <span className="clubcreation-sub">Give a rough estimate, adding up all separate fees if necessary.  If there are no fees you may enter $0.00.</span>
          <Form
            style={{paddingRight: "10px"}}
            inline>
            <Row>
              <Col md={7}>
                <InputGroup>
                  <InputGroupAddon>$</InputGroupAddon>
                  <Input
                    value={this.props.newClub.clubFeeAmount}
                    onChange={this.props.updateClubFeeAmount}/>
                  <InputGroupAddon>.00</InputGroupAddon>
                </InputGroup>
              </Col>
              <Col md={1} className="align-middle-col">
                per
              </Col>
              <Col md={4}>
                <Input
                  type="select"
                  value={this.props.newClub.clubFeePeriod}
                  onChange={this.props.updateClubFeePeriod}
                >
                  <option>meeting/session</option>
                  <option>week</option>
                  <option>month</option>
                  <option>quarter</option>
                  <option>year</option>
                </Input>
              </Col>
            </Row>
          </Form>

          <hr />
          <span className="clubcreation-question">How does someone become a new member of your club?</span>
            <TextareaAutosize
              className="clubcreation-input"
              minRows={3}
              onChange={this.props.updateClubMemReqs}
              value={this.props.newClub.memberReq}
            />
            <span
              className="clubcreation-sub"
              style={{
                float: "right",
                margin: "5px 0px 5px 0px"
              }}
            >
              {this.props.newClub.memberReq === ""
                ? 0
                : this.props.newClub.memberReq.split(/\s+/).length}/50 words
            </span>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    newClub: state.clubCreationReducer.newClub
  }),
  dispatch =>
    bindActionCreators({
      updateClubMeetingLocation,
      updateClubFeeAmount,
      updateClubFeePeriod,
      updateClubMemReqs
    }, dispatch)
)(Step2);
