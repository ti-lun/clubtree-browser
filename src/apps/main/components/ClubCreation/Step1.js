/* @flow */

import _ from "lodash";
import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Textarea from "react-textarea-autosize";

import CategorySelector from "../CategorySelector";

import { toggleClubCategory } from "../../actions/index";
import { MONTHS, VALID_YEARS } from "../../lib/consts";

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
      clubName: "",
      clubCategories: [],
      establishedDate: "",
      clubDescription: ""
    };
  }

  updateClubName = e => {
    console.log(e.target.value);
    this.setState({
      clubName: e.target.value
    });
  };

  updateClubDescription = e => {
    this.setState({
      clubDescription: e.target.value
    });
  };

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
            onChange={this.updateClubName}
          />
          <span
            className="clubcreation-sub"
            style={{
              float: "right",
              margin: "5px 0px 5px 0px"
            }}
          >
            {this.state.clubName.length}/30 characters
          </span>
        </div>

        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question margin-bottom-5px">
            Choose <i>one</i> category your club is in.
          </span>
          <CategorySelector />
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
              onChange={this.updateClubDescription}
            />
            <span
              className="clubcreation-sub"
              style={{
                float: "right",
                margin: "5px 0px 5px 0px"
              }}
            >
              {this.state.clubDescription === ""
                ? 0
                : this.state.clubDescription.split(/\s+/).length}/50 words
            </span>
          </div>
        </div>

        <Button className="clubcreation-continue-btn">Continue</Button>
      </div>
    );
  }

  submit() {
    console.log("button was clicked");
    axios.get("/api/clubs").then(function(data) {
      console.log(data);
    });
  }
}

export default connect(
  state => ({ newClub: state.clubCreationReducer.newClub }),
  dispatch =>
    bindActionCreators(
      {
        toggleClubCategory
      },
      dispatch
    )
)(Step1);
