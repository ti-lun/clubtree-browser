/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Header from "../components/Header";
import ProfileHeader from "../components/ClubProfile/ProfileHeader";

export class ClubProfile extends Component {
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
  }

  render() {
    return (
      <div>
        <Helmet title="SearchResults" />
        <Header type="main" />
        <ProfileHeader />
        <div className="col-xs-12 clubprofilesection">
          <h1 className="col-xs-12 clubprofilesection"> In a nutshell </h1>
          <hr className="col-xs-12 clubprofilesection" />
          <p className="col-xs-12 clubprofilesection"> description </p>
        </div>

        <div className="col-xs-12 clubprofilesection">
          <h1 className="col-xs-12 clubprofilesection"> Basic info </h1>
          <hr className="col-xs-12 clubprofilesection" />
          <p className="col-xs-12 clubprofilesection"> Year started: 2342 </p>
          <p className="col-xs-12 clubprofilesection">
            {" "}Approx. number of members: 533{" "}
          </p>
          <p className="col-xs-12 clubprofilesection">
            {" "}Meeting location: sfasdf{" "}
          </p>
          <p className="col-xs-12 clubprofilesection">
            {" "}Meeting times: sdfasd{" "}
          </p>
        </div>

        <div className="col-xs-12 clubprofilesection">
          <h1 className="col-xs-12 clubprofilesection"> Teamwork values </h1>
          <hr className="col-xs-12 clubprofilesection question" />
          <p className="col-xs-12 clubprofilesection"> hi </p>
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
)(ClubProfile);
