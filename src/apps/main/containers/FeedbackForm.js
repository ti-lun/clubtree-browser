/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

import feedback from "../assets/images/homepage/feedback.png";


import Helmet from "react-helmet";

export class FeedbackForm extends Component {
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
      <div className="searchresults-bg">
        <Helmet title="FeedbackForm"/>
        <Header
          showSearch={true}
         />
        <div className="feedback-body">
          <span className="home-developers-header">Feedback, please!</span>
          <div>We are always trying to make Clubtree better and better. If you find a bug, have a suggestion or just want to say something nice (and make our day!), </div>
          <img
            src={feedback}
            className="img-fluid"
            width="20%"
            style={{
              margin: "5%"
            }}
          />
          <form method="POST" 
            action="https://formspree.io/clubtreeteam@gmail.com"
            style={{
              margin: "1% 20% 1% 20%"
            }}> 
            <input 
              type="hidden" 
              name="_next" 
              value="/" />
            <input 
              className="feedback"
              type="email" 
              name="email" 
              placeholder="Your email" /> <br />
            <select
              className="feedback"
            >
              <option value="Suggestions">Suggestions</option>
              <option value="Clubs">Clubs</option>
              <option value="Something else">Something else</option>
            </select><br />
            <textarea 
              className="feedback"
              name="message" 
              placeholder="What's up?"></textarea> <br/>
            <button 
              className="feedback-btn"
              type="submit">Send</button> 
          </form> 
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(FeedbackForm);
