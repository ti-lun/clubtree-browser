/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../components/Header";
import { Button } from "reactstrap";

import ClubCreationHeader from "../components/ClubCreation/ClubCreationHeader";
import Step1 from "../components/ClubCreation/Step1";
import Step2 from "../components/ClubCreation/Step2";
import Step3 from "../components/ClubCreation/Step3";
import Step4 from "../components/ClubCreation/Step4";


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
  (/* state */) => ({
    /** _INSERT_STATE_  **/
  }),
  dispatch =>
    bindActionCreators(
      {
        /** _INSERT_ACTION_CREATORS_ **/
      },
      dispatch
    )
)(ClubCreation);
