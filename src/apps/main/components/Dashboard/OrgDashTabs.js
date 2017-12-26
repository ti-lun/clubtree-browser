/* @flow */

import React, { Component } from "react";
import { Link } from "react-router";
import axios from "axios";
import Promise from "bluebird";

import { API_URL } from "../../lib/consts";

export default class OrgDashTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.clubs !== this.props.clubs) {
    let newTabs = [];
    let tabIndex = 0;

    return Promise.mapSeries(nextProps.clubs, (club, index) => {
      if (club.club) {
        return axios.get(`${API_URL}/clubs/${club.club}`).then((response) => {
          tabIndex++;
          newTabs.push(
            <div
              onClick={() => this.props.viewDiffClub(response, club)}
              key={newTabs.length}
              className={`dash-tabs include: single-dash-tab${newTabs.length} mild-shadow`}>
              {response.data.clubName}
            </div>
          );
        }).catch(function (err) {
          // ignore errors so it doesn't prevent clubs from appearing
        });
      }
    }).then(() => {
      tabIndex++;

      let numberOfClubs = newTabs.length;
      if (numberOfClubs < 2) {
        newTabs.push(
          <Link key={newTabs.length} to="/clubcreation">
            <div className={`dash-tabs include: single-dash-tab${newTabs.length} mild-shadow`}>
              Add club
            </div>
          </Link>
        )
      }

      this.setState({
        tabs: newTabs
      });
    });
    // }

  }

  // componentWillMount() {
  //   console.log("club in CWM is", this.props.clubs);
  //   this.props.clubs.map((club, index) => {
  //     console.log("club in loop is", club);
  //     if (club.club) {
  //       axios.get(`api/clubs/${club.club}`).then((response) => {
  //         const club = response.data;
  //         console.log("now pushing", club);
  //         this.state.clubs.push({
  //           club: club["club"],
  //           clubName: club.clubName,
  //           clubCover: club.clubCover
  //         });
  //       });
  //     }
  //   });
  // }

  render() {
    // if (this.props.clubs.length === 0) {
    //   this.state.tabs.push((
    //     <Link key={this.state.tabs.length} to="/clubcreation">
    //       <div className={`dash-tabs single-dash-tab${this.state.tabs.length} mild-shadow`}>
    //         Add club
    //       </div>
    //     </Link>
    //   ));
    // }
    //
    // else {
    // }

    console.log("tabs are", this.state.tabs.length);
    return (
      <div id="pls">
        {this.state.tabs}
      </div>
    );
  }
}
