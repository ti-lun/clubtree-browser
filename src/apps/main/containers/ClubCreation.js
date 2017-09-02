/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../components/Header";

import Step1 from "../components/ClubCreation/Step1";

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
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <Helmet title="ClubCreation" />
        <Header type="main"/>
        {this.displayAtStep(this.state.step)}
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
