/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Link } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";


export class FAQ extends Component {
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
          <Helmet title="FAQ"/>

          <div className="mobile-plain-body screen-plain-body">
            <span className="home-developers-header">FAQ</span>
            <div>
              <strong>What is Clubtree?</strong><br />
              Clubtree is a unified directory of clubs and their events.  We provide information about clubs in a consistent, clear way to make it easier for you to find what you need about clubs.<br /><br />
              
              <strong>I want to know more about [some club], but it's not on Clubtree/stuff looks wonky  Why?</strong><br />
              Clubtree is more or less in beta right now, and all of its features aren't complete.  If there's something you'd like to suggest, please <Link to="/feedback">give us feedback</Link>.  We're also trying to get more data from clubs, and that's going to involve user accounts and a lot of communication.  So sit tight, and we're gonna make it possible for you to know more about when clubs are meeting, more details about events, and whatnot!<br /><br />
              
              <strong>I'm a club officer and I want to claim my club/correct some information about my club.</strong><br />
              Great!  Find your club, and click "Claim your club."  Soon we'll have user accounts so that you can do it yourself without me (the founder) mediating your information.<br /><br />
              
              <strong>So how accurate is all the stuff you have?</strong><br/>
              Most of it is correct, because a lot of it is stuff pulled from the UCI Campus Organizations database or from the clubs' websites themselves.  But there are some things that are just guesstimated, such as the club sizes.  Speaking of which...<br/><br />
              
              <strong>What do the club sizes mean?</strong><br />
              Ahaha that is an <i>excellent</i> question.  So this is a gray-area problem that I would absolutely love to receive feedback on, because it turns out this is (a) difficult to determine from an outsider's point of view, (b) pretty hard to tell just from photos and Facebook group counts, and (c) a subjective thing that's hard to reduce to three options.  But this is how I've figured it to be:<br /><br />
              <ul>
                <li><strong>Small</strong>&nbsp; 1-20 people.  In photos, I would see if under 10 people consistently show up to events.</li>
                <li><strong>Mid-sized</strong>&nbsp; ~20-70 people.  This was a bit harder to determine, because this category covers a couple of types of activity and group numbers.  For the most part, I just judge if the same 20-70 people consistently show up to events.  Most fraternities and sororities fall under this category since I'm counting active memmbers.</li>
                <li><strong>Large</strong>&nbsp; 70+ people.  These are clubs with many, many people that are big enough so that they can have different groups of 20-70 people showing up to events.</li>
              </ul><br />
              Again, these were estimated through online sources.  I haven't seen like 99% of these clubs in person!  So please correct me if I'm wrong.  :)<br /><br />
              
              <strong>What are the additional tags that show up on the search results?  (e.g. "Chill", "Intense"...)</strong><br/>
              They're "vibes," which are quick pieces of information about the club that are soon to be implemented.  Stay tuned!<br /><br />
              
              <strong>Clubtree seems super interesting, and I would like to be part of the team.  How do??</strong><br/>
              OMG, awesome.  Hit us up at <strong>clubtreeteam@gmail.com</strong> with your resume and we can talk.
            </div>
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
)(FAQ);
