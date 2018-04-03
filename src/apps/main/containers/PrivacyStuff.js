/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

export class PrivacyStuff extends Component {
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

  render () {
    return (
      <div>
        <Header 
          showSearch={true}
        />      
        <div className="searchresults-bg">
          <Helmet title="PrivacyStuff"/>

          <div className="mobile-plain-body screen-plain-body">
            <span className="home-developers-header">Privacy Stuff</span>
            Here's where we talk about where our data comes from, so you know we're not evil or spying on you.<br /><br/>
            <strong>Clubs</strong><br />
            We got all the registered clubs at UC Irvine by scraping <a href="https://campusorgs.uci.edu">campusorgs.uci.edu</a>.  Most of the basic information--club names, officers and their emails, and summaries--are from this site.<br /><br />
            Additional information is from the official sites of clubs.  How'd we find these official sites?  Believe it or not, we took hours to Google these sites and manually enter more data.  In the future, we're going to allow club officers to make corrections or additions to the Clubtree database.<br /><br />
            <strong>Events</strong><br />
            We use Facebook's Graph API to pull events from clubs' Facebook groups and pages.  Then we save these events into our database for fast and simple loading and clean out old events, updating it regularly.<br /><br />
            <strong>We do not sell your information to anyone.  That's against Facebook's data usage rules and, to be frank, just creepy.</strong>  In the end, we're just trying to help people find clubs at school, so we're not interested in making money off your data.  :)
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(PrivacyStuff);
