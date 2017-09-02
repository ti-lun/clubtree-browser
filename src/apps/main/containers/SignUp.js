/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Header from "../components/Header";
import ChooseSignUpOption from "../components/SignUp/ChooseSignUpOption";

export class SignUp extends Component {
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
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  constructor(props) {
    super(props);
    this.state = {
      display: 1
    };
  }

  displayFromStep() {
    switch(this.state.display) {
      case 1:
        return <ChooseSignUpOption />;
      default:
        return null;
    }
  }

  render () {
    return (
      <div className="joinus">
        <Helmet title="SignUp"/>
        <Header type="signup"/>
        <div style={{
            textAlign: "center",
            marginBottom: "50px"
          }}>
          <span style={{
              color: "white",
              fontSize: "60px",
              display: "block"
            }}>Join Us</span>
          <span style={{
              color: "white",
              fontSize: "24px"
          }}>Takes just a couple of clicks.</span>
        </div>
          <div style={{
              backgroundColor: "#FFFFFF",
              width: "30%",
              left: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "50px",
              boxShadow: "10px 10px 50px #000000",
              textAlign: "center"
            }}>
            { this.displayFromStep() }
          </div>
        </div>

    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(SignUp);
