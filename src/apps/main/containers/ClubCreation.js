/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../components/Header";
import { Button } from "reactstrap";
import axios from "axios";

import ClubCreationHeader from "../components/ClubCreation/ClubCreationHeader";
import Step1 from "../components/ClubCreation/Step1";
import Step2 from "../components/ClubCreation/Step2";
import Step3 from "../components/ClubCreation/Step3";
import Step4 from "../components/ClubCreation/Step4";

//need to pass newclub action into step 1...
import { updateValidationStep } from "../actions/clubCreationActions";

import {
  CLUB_NAME_CHAR_LENGTH,
  CLUB_DESC_WORD_LENGTH
} from "../lib/consts";


export class ClubCreation extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute(/* {dispatch}, renderProps, query, serverProps */) {}

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  displayAtStep = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    };
  };

  backClicked = () => {
    this.setState({
      step: this.state.step - 1
    });
  }

  continueClicked = () => {
    switch (this.state.step) {
      case 1: {
        // club name invalid
        if (
          (this.props.newClub.name.length > CLUB_NAME_CHAR_LENGTH) ||
          (this.props.newClub.name.length === 0)) {
          return;
        }
        // club desc invalid
        else if ((this.props.newClub.desc.length > CLUB_DESC_WORD_LENGTH)
        || (this.props.newClub.desc.length === 0)) {

          return;
        }
        // no club category selected
        else if (this.props.newClub.category === "") {

          return;
        }
        // everything was valid, hooray.  Time to save the data.

        // first, check to see if the club was created already.
        if (this.props.params.clubID) {
          // update club
        }
        else {
          axios.post("/api/clubs", {
            clubName: this.props.newClub.name,
            description: this.props.newClub.desc,
            category: this.props.newClub.category
          });
        }

        break;
      }

      case 2: {
        // club meeting location invalid
        if (
          (this.props.newClub.meetingLocation.length > CLUB_NAME_CHAR_LENGTH) ||
          (this.props.newClub.meetingLocation.length === 0)) {
          return;
        }
        // no time selected
        else if (this.props.newClub.meetingDatesAndTimes["meetingDays"].length === 0) {
          return;
        }
        // no
        else if (this.props.newClub.memberReq.length > CLUB_DESC_WORD_LENGTH ||
        (this.props.newClub.memberReq.length === 0)) {
          return;
        }
        break;
      }

      default:
        return;
    }
      this.setState({
        step: this.state.step + 1
      });
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          height: "100%"
        }}
      >
        <Helmet title="ClubCreation" />
        <Header type="signup" />
        <ClubCreationHeader completed={this.state.step - 1} />
        <div className="clubcreation-process-body">
          {this.displayAtStep(this.state.step)}
        </div>
        <div className="clubcreation-nav-btns">
          {(this.state.step > 1) ? (
              <Button
                className="clubcreation-back-btn"
                onClick={this.backClicked}
                >Back</Button>
          ) : null}
          {(this.state.step < 4) ? (
              <Button
                className={(this.state.step > 1) ?
                  "clubcreation-continue-btn" :
                  "clubcreation-continue-btn-single"
                }
                onClick={this.continueClicked}
              >Continue</Button>
          ) : null}

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
        updateValidationStep
      },
      dispatch
    )
)(ClubCreation);
