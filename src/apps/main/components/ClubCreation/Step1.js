/* @flow */

import _ from "lodash";
import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Button, Row, Col } from "reactstrap";
import { toggleClubCategory } from "../../actions/index";

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

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <div>
            <h2> Club Name </h2>
            <input
              type="text"
              placeholder="e.g. Practical Concrete Bike Club"
            />
            <small>Make it snazzy.</small>
          </div>
        </div>
        <hr />
        <div>
          <h2> Categories </h2>
          <Container>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[0])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[0]
                  )}
                >
                  Academics & Honors
                </Button>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[4])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[4]
                  )}
                >
                  Art
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[1])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[1]
                  )}
                >
                  Career & Professional
                </Button>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[5])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[5]
                  )}
                >
                  Environmental
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[2])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[2]
                  )}
                >
                  Sports
                </Button>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[6])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[6]
                  )}
                >
                  Social
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[3])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[3]
                  )}
                >
                  Community Service
                </Button>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.toggleClubCategory(CATEGORY_TAGS[7])}
                  active={_.includes(
                    this.props.newClub["category"],
                    CATEGORY_TAGS[7]
                  )}
                >
                  Gaming
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <hr />
        <div>
          <div>
            <label>Date Established</label>
            <input type="text" placeholder="4/20/17" />
            <small>4/20/2000</small>
          </div>
          <hr />
          <div>
            <label>Short Description</label>
            <textarea rows="3" />
            <small>First impressions last a lifetime.</small>
          </div>
          <button type="button" onClick={this.submit}>
            {" "}Submit{" "}
          </button>
        </div>
      </form>
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
