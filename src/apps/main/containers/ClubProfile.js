/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col } from "reactstrap";
import axios from "axios";

import { API_URL } from "../lib/consts";

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
      imageURLs: {}
    }
  }

  componentWillMount() {
    console.log(axios);
    console.log("before axios");
    axios.get(`${API_URL}/clubs/${this.props.params.id}`).then((response) => {
      console.log("response is", response);
      this.setState(response.data);
    });

  }

  render() {
    return (
      <div>
        <Helmet title="SearchResults" />
        <Header type="main" />
        <ProfileHeader
          logo={this.state.imageURLs.logo}
          cover={this.state.imageURLs.cover}
          clubName={this.state.clubName}
          vibes={this.state.vibes}
        />
        <div
          className="clubprofile-info-background"
          style={{
            backgroundImage: `url(${this.state.imageURLs.cover})`,
            size: "100%"
          }}
        />

        <div className="clubprofile-info-body">
          <div className="clubprofile-info-section">
            <h1 className="col-xs-12 clubprofilesection"> In a nutshell </h1>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection">
              {this.state.description}
            </p>
          </div>

          <div className="clubprofile-info-section">
            <h1 className="col-xs-12 clubprofilesection"> Basic info </h1>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection"> Year started: {this.state.foundedYear.substring(0, 4)} </p>
            <p className="col-xs-12 clubprofilesection">
              {" "}Approx. number of members: {this.state.members.length}{" "}
            </p>
            <p className="col-xs-12 clubprofilesection">
              {" "}Meeting location: {this.state.meeting.meetingLocation}{" "}
            </p>
            <p className="col-xs-12 clubprofilesection">
              {" "}Meeting times: {this.state.meeting.meetingTime}{" "}
            </p>
          </div>

          <div className="clubprofile-info-section">
            <h1 className="col-xs-12 clubprofilesection"> Teamwork values </h1>
            <hr className="col-xs-12 clubprofilesection question" />
            <p className="col-xs-12 clubprofilesection"> hi </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch =>
    bindActionCreators({}, dispatch)
)(ClubProfile);
