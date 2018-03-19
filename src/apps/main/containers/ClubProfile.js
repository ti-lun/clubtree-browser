/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col } from "reactstrap";
import axios from "axios";

import { API_URL, DAYS } from "../lib/consts";
import { convertSizeChar } from "../lib/utils";

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
    const websiteLists = (this.state.website) ? this.state.website.split(";").map((site, index) => {
      return (
        <a href={site} target="/">{site}<br/></a>
      );
    }) : [];
    
    return (
      <div>
        <Helmet title="SearchResults" />
        <Header
          type="safe"
          showSearch={true}
        />
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
            <h3 className="col-xs-12 clubprofilesection">In a nutshell </h3>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection">
              {this.state.description}
            </p>
          </div>

          <div className="clubprofile-info-section">
            <h3 className="col-xs-12 clubprofilesection">Basic info </h3>
            <hr className="col-xs-12 clubprofilesection" />
            <Row style={{marginBottom: "10px"}}>
              <Col className="col-xs-12 margin-bottom-20px">
                <span className="clubprofile-table-header">Website(s)</span>
              </Col>
              <Col>{(websiteLists.length > 0) ? websiteLists : "No external websites"}</Col>
            </Row>
            <Row>
              <Col className="col-xs-12 margin-bottom-20px">
                <span className="clubprofile-table-header">Who to contact</span>
              </Col>
              <Col>{this.state.contact}</Col>
            </Row>
            <Row>
              <Col className="col-xs-12 margin-bottom-20px">
                <span className="clubprofile-table-header">Club email</span>
              </Col>
              <Col>{this.state.email}</Col>
            </Row>
            <Row>
              <Col className="col-xs-12 margin-bottom-20px">
                <span className="clubprofile-table-header">Year started</span>
              </Col>
              <Col>{this.state.foundedYear.substring(0, 4)}</Col>
            </Row>
            <Row>
              <Col className="col-xs-12 margin-bottom-20px clubprofilesection">
                <span className="clubprofile-table-header">Club size</span>
              </Col>
              <Col>
              {convertSizeChar(this.state.size)}{" "}
              </Col>
            </Row>
            <Row>
              <Col className="col-xs-12 margin-bottom-20px clubprofilesection">
              <span className="clubprofile-table-header">Meeting location</span>
              </Col>
              <Col>
                {this.state.meetingLocation}
                Some location
              </Col>
            </Row>
            <Row>
              <Col className="col-xs-12 margin-bottom-20px clubprofilesection">
                <span className="clubprofile-table-header">Meeting times</span>
              </Col>
              <Col>
                {this.extractMeetingDatesAndTimes(this.state.meetingDatesAndTimes)}{" "}
                Hello
              </Col>
            </Row>
          </div>

          <div className="clubprofile-info-section">
            <h3 className="col-xs-12 clubprofilesection"> Membership requirements </h3>
            <hr className="col-xs-12 clubprofilesection" />
            <p className="col-xs-12 clubprofilesection">
              {this.state.memberReq}
            </p>
            <p>
              For any dues or fees, this club requires: {this.state.feeDescription}
            </p>
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
