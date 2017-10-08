/* @flow */

import _ from "lodash";
import axios from "axios";
import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Textarea from "react-textarea-autosize";

import ColorfulSelector from "../ColorfulSelector";

// DEFINITELY make the clubName etc. in Redux.

//make more actions for updating newClub iwth more stuff
import {
  updateClubName,
  updateClubDesc,
  toggleClubCategory,
  updateValidationStep } from "../../actions/clubCreationActions";
import {
  CATEGORIES_ICONS_MAP,
  MONTHS,
  VALID_YEARS,
  CLUB_NAME_CHAR_LENGTH,
  CLUB_DESC_WORD_LENGTH
 } from "../../lib/consts";

const CATEGORY_TAGS = [
  "academic",
  "professional",
  "sports",
  "community service",
  "art",
  "environmental",
  "social",
  "gaming"
];

class Step1 extends React.Component {
  static propTypes = {
    newClub: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
  }

  validateClubDesc = () => {
    const result = (this.props.newClub.desc.length < CLUB_DESC_WORD_LENGTH) && (this.props.newClub.desc.length !== 0);
    return result;
  }


  validateClubName = () => {
    const result = (this.props.newClub.name.length < CLUB_NAME_CHAR_LENGTH) && (this.props.newClub.name.length !== 0);
    return result;
  }

  render() {
    const saveThis = (
      <Button
        color="primary"
        onClick={() => this.props.toggleClubCategory(CATEGORY_TAGS[0])}
        active={_.includes(this.props.newClub["category"], CATEGORY_TAGS[0])}
      />
    );

    return (
      <div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question margin-bottom-5px">
            What's your club's name?
          </span>
          <input
            type="text"
            className="clubcreation-input"
            onChange={this.props.updateClubName}
            value={this.props.newClub.name}
          >
          </input>
          <span
            className={(this.validateClubName()) ? "clubcreation-sub" : "clubcreation-sub clubcreation-error"}
            style={{
              float: "right",
              margin: "5px 0px 5px 0px"
            }}
          >
            {this.props.newClub.name.length}/{CLUB_NAME_CHAR_LENGTH} characters
          </span>
        </div>

        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question margin-bottom-5px">
            Choose <i>one</i> category your club is in.
          </span>
          <ColorfulSelector
            selectorAction={this.props.toggleClubCategory}
            selectorReducer={this.props.newClub.category}
            selectorKeys={CATEGORIES_ICONS_MAP}
            grid={true}
             />
        </div>

        <div className="mild-shadow clubcreation-process-section">
          <div className="clubcreation-divided-section">
            <Row>
              <Col>
                <span className="clubcreation-question">
                  About when was your club established?
                </span>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Input className="mx-2 clubcreation-date-btn" type="select">
                      {MONTHS.map((month, index) => {
                        return (
                          <option key={index}>
                            {month}
                          </option>
                        );
                      })}
                    </Input>
                  </Col>
                  <Col>
                    <Input className="clubcreation-date-btn" type="select">
                      {VALID_YEARS.map((year, index) => {
                        return (
                          <option key={index}>
                            {year}
                          </option>
                        );
                      })}
                    </Input>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <hr />
          <div className="clubcreation-divided-section">
            <span className="clubcreation-question">
              Give a brief description of your club.
            </span>
            <Textarea
              className="clubcreation-input"
              minRows={3}
              onChange={this.props.updateClubDesc}
              value={this.props.newClub.desc}
            />
            <span
              className={(this.validateClubDesc()) ? "clubcreation-sub" : "clubcreation-sub clubcreation-error"}
              style={{
                float: "right",
                margin: "5px 0px 5px 0px"
              }}
            >
              {this.state.clubDescription === ""
                ? 0
                : this.props.newClub.desc.split(/\s+/).length}/{CLUB_DESC_WORD_LENGTH} words
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    newClub: state.clubCreationReducer.newClub,
    validationSteps: state.clubCreationReducer.validationSteps
  }),
  dispatch =>
    bindActionCreators(
      {
        updateClubName,
        updateClubDesc,
        toggleClubCategory,
        updateValidationStep
      },
      dispatch
    )
)(Step1);
