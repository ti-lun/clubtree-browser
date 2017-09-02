/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategorySelector from "../components/CategorySelector";
import VibeSelector from "../components/VibeSelector";

export class AdvancedSearch extends Component {
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

  render() {
    return (
      <div className="container">
        <Helmet title="AdvancedSearch" />
        <Header type="advancedsearch"/>
        <div
          style={{
            backgroundColor: "#d6f0f3",
            "boxShadow": "10px 10px 15px #aaaaaa",
            padding: "40px 20px 40px 40px",
            margin: "0px 0px 20px 0px"
          }}
        >
          <h2>Do you have a particular club in mind?</h2>
          <SearchBar searchBarStyleId="advanced-search" /> <br />
          Examples: part of a club name, a game you are interested in, people
          you know
        </div>
        <div
          style={{
            "boxShadow": "10px 10px 15px #aaaaaa",
            padding: "40px 0px 40px 40px",
            margin: "0px 0px 20px 0px",
            backgroundColor: "white"
          }}
        >
          <h2>Or how about picking a category to start with?</h2>
          Pick as many as you like.
          <CategorySelector />

          <h2>Interested in what a club's vibes are like?</h2>
          Pick as many as you like.
          <VibeSelector />
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
)(AdvancedSearch);
