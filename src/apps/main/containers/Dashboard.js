/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import axios from "axios";

import OrgDashboard from "../components/Dashboard/OrgDashboard";
import Header from "../components/Header";

import { API_URL } from "../lib/consts";


export class Dashboard extends Component {
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
      clubs: [],
      displayName: {},
    }
  }

  componentDidMount() {
    // check to see if this user has any clubs.
    const userID = localStorage.getItem("_id");
    axios.get(`${API_URL}/members`, {
      params: {
        "_id": userID
      }
    }).then((response) => {
      const responseObj = response.data[0];
      this.setState({
        clubs: responseObj.clubs,
        name: {
          first: responseObj.firstName,
          last: responseObj.lastName
        }
      })
    });


  }

  render () {
    return (
      <div>
        <Helmet title="Dashboard"/>
        <Header />
        <div className="dashboard-margins">

        </div>
      </div>
    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Dashboard);
