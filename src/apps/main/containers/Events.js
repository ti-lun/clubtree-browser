/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import {Row, Col} from "reactstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleEvent from "../components/Events/SingleEvent";

import { MONTHS } from "../lib/consts";

import burningTree from "../assets/images/events/burningtree.png";

export class Events extends Component {
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
    
    const currentDay = new Date("March 10, 2018");
    
    const events = [
      {
        simplifiedClub: "UCI Starcraft Team",
        eventName: "CSL Viewing Party at Dylan's place",
        eventDate: new Date("March 11, 2018"),
        eventLink: "http://neopets.com"
      },
      {
        simplifiedClub: "Let's just say this club has a long-ass name",
        eventName: "Banh Mi fundraiser",
        eventDate: new Date("March 10, 2018"),
        eventLink: "http://yahoo.com"
      },
      {
        simplifiedClub: "Bougie honor society",
        eventName: "Study session at Courtyard Study Lounge",
        eventDate: new Date("March 09, 2018"),
        eventLink: "http://google.com"
      },
      {
        simplifiedClub: "Bougie honor society",
        eventName: "$2 Boba Fundraiser for Girls",
        eventDate: new Date("March 06, 2018"),
        eventLink: "http://reddit.com"
      },
    ];
    
    return (
      <div className="events-bg">
        <Helmet title="Events"/>
        <Header 
          showSearch={true}
        />
        
          <div style={{textAlign: "center"}}>
            <Row className="events-header">
              <Col md={3}>
                <img src={burningTree} width="100%" />
              </Col>
              <Col md={9}>
                <span className="events-header-text">Events hot off the press</span><br/>
                <span className="events-subtitle-text">Viewing events from { MONTHS[currentDay.getMonth()] } { currentDay.getDate() }</span>
              </Col>
            </Row>
          </div>
          
          <div className="events-display">
            { events.map((event, index) => {
              if (event.eventDate >= currentDay) {
                return (
                  <SingleEvent 
                    key={index}
                    simplifiedClub={event.simplifiedClub}
                    eventDate={event.eventDate}
                    eventName={event.eventName}
                  />
                );
              }
            }) }
          </div>
          <hr 
            className="events-hr" />
          <div style={{textAlign: "center"}}>
            <span className="events-subtitle-text">What you've missed</span>
          </div>
          
          <div className="events-display">
            { events.map((event, index) => {
              if (event.eventDate < currentDay) {
                return (
                  <SingleEvent 
                    key={index}
                    simplifiedClub={event.simplifiedClub}
                    eventDate={event.eventDate}
                    eventName={event.eventName}
                  />
                );
              }
            }) }
          </div>
          
        <Footer />
      </div>
    );
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Events);
