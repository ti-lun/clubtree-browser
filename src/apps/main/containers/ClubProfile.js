/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col } from "reactstrap";
import axios from "axios";

import { API_URL, DAYS } from "../lib/consts";

import Header from "../components/Header";
import ProfileHeader from "../components/ClubProfile/ProfileHeader";
import Footer from "../components/Footer";
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
  static gsBeforeRoute(/* {dispatch}, renderProps, query, serverProps */) { }

  constructor(props) {
    super(props);
    this.state = {
      clubName: "",
      description: "",
      category: "",
      foundedYear: "",
      createdDate: "",
      vibes: [],
      personality: [],
      meeting: {},
      organizers: [],
      members: [],
      clubLogo: "",
      clubCover: ""
    }
    console.log("in constructor rn");
  }

  componentWillMount() {
    axios.get(`${API_URL}/clubs/${this.props.params.id}`).then((response) => {
      this.setState(response.data);
    });

  }

  extractMeetingDatesAndTimes = (meetingObj) => {
    if (!meetingObj) {
      return "";
    }
    return DAYS.map((day, index) => {
      if (day in meetingObj) {
        const startHour = ("hour" in meetingObj[day]["start"]) ? meetingObj[day]["start"]["hour"] : "1";
        const startMinutes = ("minutes" in meetingObj[day]["start"]) ? meetingObj[day]["start"]["minutes"] : "00";
        const startMeridian = ("meridian" in meetingObj[day]["start"]) ? meetingObj[day]["start"]["meridian"] : "AM";
        const endHour = ("hour" in meetingObj[day]["end"]) ? meetingObj[day]["end"]["hour"] : "1";
        const endMinutes = ("minutes" in meetingObj[day]["end"]) ? meetingObj[day]["end"]["minutes"] : "00";
        const endMeridian = ("meridian" in meetingObj[day]["end"]) ? meetingObj[day]["end"]["meridian"] : "AM";


        return `${day}s from ${startHour}:${startMinutes} ${startMeridian} to ${endHour}:${endMinutes} ${endMeridian} \n`;
      }
    });
  }

  render() {
    return (
      <div>
        <Helmet title="SearchResults" />
        <Header type="main" />
        <ProfileHeader
          logo={this.state.clubLogo}
          cover={this.state.clubCover}
          clubName={this.state.clubName}
          vibes={this.state.vibes}
        />
        <div
          className="clubprofile-info-background"
          style={{
            backgroundImage: `url(${this.state.clubCover})`,
            size: "100%"
          }}
        />

        <div className="clubprofile-info-body">
          <div className="clubprofile-info-section">
            <h3 className="col-xs-12 clubprofilesection"> In a nutshell </h3>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection">
              {this.state.description}
            </p>
          </div>

          <div className="clubprofile-info-section">
            <h3 className="col-xs-12 clubprofilesection"> Basic info </h3>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection"> Year started: {this.state.foundedYear.substring(0, 4)} </p>
            <p className="col-xs-12 clubprofilesection">
              Year started: {this.state.foundedYear.substring(0, 4)}
            </p>
            <p className="col-xs-12 clubprofilesection">
              {" "}Approx. number of members: {this.state.members.length}{" "}
            </p>
            <p className="col-xs-12 clubprofilesection">
              {" "}Meeting location: {this.state.meetingLocation}{" "}
            </p>
            <p className="col-xs-12 clubprofilesection">
              {" "}Meeting times:<br />
              {this.extractMeetingDatesAndTimes(this.state.meetingDatesAndTimes)}{" "}
            </p>
          </div>

          <div className="clubprofile-info-section">
            <h3 className="col-xs-12 clubprofilesection"> Membership requirements </h3>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection">
              {this.state.memberReq}
            </p>
            <p>
              For any dues or fees, this club requires ${this.state.clubFeeAmount} per {this.state.clubFeePeriod}.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch =>
    bindActionCreators({}, dispatch)
)(ClubProfile);
