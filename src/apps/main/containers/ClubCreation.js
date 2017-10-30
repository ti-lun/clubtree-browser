/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../components/Header";
import { Button } from "reactstrap";
import axios from "axios";

import { API_URL } from "../lib/consts";

import ClubCreationHeader from "../components/ClubCreation/ClubCreationHeader";
import Step1 from "../components/ClubCreation/Step1";
import Step2 from "../components/ClubCreation/Step2";
import Step3 from "../components/ClubCreation/Step3";
import Step4 from "../components/ClubCreation/Step4";

//need to pass newclub action into step 1...
import { updateValidationStep, loadExistingClub } from "../actions/clubCreationActions";

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
      step: 1,
      id: ""
    };
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.setState({
        id: this.props.params.id
      });
      axios.get(`/api/clubs/${this.props.params.id}`).then((response) => {
        const club = response.data;
        this.props.loadExistingClub(club);
      });
    }
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
    // this definitely needs a lot of, erm... sprucing.
    switch (this.state.step) {
      case 1: {
        // club name invalid
        if (
          (this.props.newClub.clubName.length > CLUB_NAME_CHAR_LENGTH) ||
          (this.props.newClub.clubName.length === 0)) {
          return;
        }
        // club desc invalid
        else if ((this.props.newClub.description.length > CLUB_DESC_WORD_LENGTH)
        || (this.props.newClub.description.length === 0)) {

          return;
        }
        // no club category selected
        else if (this.props.newClub.category === "") {

          return;
        }
        // everything was valid, hooray.  Time to save the data.

        // first, check to see if the club was created already.
        if (this.props.params.id) {
          axios.put(`/api/clubs`, {
            id: this.state.id,
            updateFields: {
              clubName: this.props.newClub.clubName,
              description: this.props.newClub.description,
              category: this.props.newClub.category
            }
          });
        }
        else {

          axios.post(`/api/clubs`, {
            clubName: this.props.newClub.clubName,
            description: this.props.newClub.description,
            category: this.props.newClub.category,
            organizerID: localStorage.getItem("_id")
          }).then((response) => {
            this.setState({
              id: response.data["_id"]
            });
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
        // no fee amount, even 0
        else if (this.props.newClub.clubFeeAmount === "") {
          return;
        }
        // no
        else if (this.props.newClub.memberReq.length > CLUB_DESC_WORD_LENGTH ||
        (this.props.newClub.memberReq.length === 0)) {
          return;
        }

        axios.put(`/api/clubs`, {
          id: this.state.id,
          updateFields: {
            clubFeeAmount: this.props.newClub.clubFeeAmount,
            clubFeePeriod: this.props.newClub.clubFeePeriod,
            meetingLocation: this.props.newClub.meetingLocation,
            memberReq: this.props.newClub.memberReq,
            meetingDatesAndTimes: this.props.newClub.meetingDatesAndTimes
          }
        });

        break;
      }

      case 3: {
        console.log("does step 3 even fire");
        // if there aren't 3 vibes
        if (this.props.vibesFilterCC.length < 3) {
          console.log("nope...", this.props.vibesFilterCC);
          return;
        }

        const fieldsToUpdate = {
          vibes: this.props.vibesFilterCC
        };

        if (this.props.newClub.clubLogo) {
          fieldsToUpdate["clubLogo"] = this.props.newClub.clubLogo;
        }

        if (this.props.newClub.clubCover) {
          fieldsToUpdate["clubCover"] = this.props.newClub.clubCover;
        }

        if (this.props.newClub.questions)

        axios.put(`/api/clubs`, {
          id: this.state.id,
          updateFields: {
            vibes: this.props.vibesFilterCC,
            memberReq: this.props.newClub.memberReq,
            meetingDatesAndTimes: this.props.newClub.meetingDatesAndTimes,
            clubLogo: this.props.newClub.clubLogo,
            clubCover: this.props.newClub.clubCover
          }
        });
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
    validationSteps: state.clubCreationReducer.validationSteps,
    vibesFilterCC: state.clubCreationReducer.vibesFilterCC
  }),
  dispatch =>
    bindActionCreators(
      {
        updateValidationStep,
        loadExistingClub
      },
      dispatch
    )
)(ClubCreation);
