/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import axios from "axios";

import OrgDashboard from "../components/Dashboard/OrgDashboard";
import NoClubsDashboard from "../components/Dashboard/NoClubsDashboard";
import OrgDashTabs from "../components/Dashboard/OrgDashTabs";

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
      name: {},
      currentClub: {},
      simpleClubData: {}
    };
  }

  viewDiffClub = (response, club) => {
    console.log("club clicked was", club, "additional data is", response);
    this.setState({
      currentClub: response.data,
      simpleClubData: club
    });
  }

  componentDidMount() {
    // check to see if this user has any clubs.
    const userID = localStorage.getItem("_id");
    axios.get(`/api/members`, {
      params: {
        "_id": userID
      }
    }).then((response) => {
      const responseObj = response.data[0];
      if (this.refs.body){
        this.setState({
          clubs: responseObj.clubs,
          name: {
            first: responseObj.firstName,
            last: responseObj.lastName
          }
        });
      }
    });
  }

  render () {
    console.log("cover URL is", this.state.currentClub)
    return (
      <div>
        <Helmet title="Dashboard"/>
        <Header type="dashboard"/>
        <div className="dashboard-margins" ref="body">
          <div className="dashboard-cover-crop">
            <img src={this.state.currentClub.clubCover}/>
          </div>
          { (this.state.clubs.length === 0) ? <NoClubsDashboard /> :
            <OrgDashboard
              user={this.state}
              /> }
        </div>
        <OrgDashTabs
          clubs={this.state.clubs}
          viewDiffClub={this.viewDiffClub}
          />
      </div>
    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Dashboard);
