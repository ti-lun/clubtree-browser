/* @flow */

import React, { Component } from "react";
import { Link } from "react-router";
import axios from "axios";

import { API_URL } from "../../lib/consts";

export default class OrgDashTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    };
  }

  async componentWillReceiveProps(nextProps) {
    let newTabs = [];
    let tabIndex = 0;
    await Promise.all(nextProps.clubs.map(async (club, index) => {
      if (club.club) {
        const clubInfo = await axios.get(`${API_URL}/clubs`).then((response) => {
            tabIndex++;
            newTabs.push(
                <div
                  onClick={ () => this.props.viewDiffClub(response, club) }
                  key={index}
                  className={`dash-tabs single-dash-tab${tabIndex} mild-shadow`}>
                  { response.data.clubName }
                </div>
            );
          });
        }
      }));
      tabIndex++;
      newTabs.push(
        <Link to="/clubcreation">
          <div className={`dash-tabs single-dash-tab${tabIndex} mild-shadow`}>
            Add club
          </div>
      </Link>
    )

    this.setState({
      tabs: newTabs
    });

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
    if (this.props.clubs.length === 0) {
      this.state.tabs.push((
        <Link to="/clubcreation">
          <div className="dash-tabs single-dash-tab1 mild-shadow">
            Add club
          </div>
        </Link>
      ));
    }

    else {
    }

    console.log("tabs are", this.state.tabs.length);
    return (
      <div id="pls">
        {this.state.tabs}
      </div>
    );
  }
}
