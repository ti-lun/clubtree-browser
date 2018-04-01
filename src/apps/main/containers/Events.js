/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import {Row, Col} from "reactstrap";
import qs from "qs";
import axios from "axios";
import Promise from "bluebird";

import { API_URL } from "../lib/consts";

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

  constructor(props) {
    super(props);
    this.state = {
      futureEvents: [],
      pastEvents: []
    };
  }
  
  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    let request = Promise.try(() => {
      return axios.get(`${API_URL}/events`, {
        params: {
          startTime: "future"
        }
      }).then((res) => {
        this.setState({ futureEvents: res.data });
      });
    });
    
    let request2 = Promise.try(() => {
      return axios.get(`${API_URL}/events`, {
        params: {
          startTime: "past"
        }
      }).then((res) => {
        this.setState({ pastEvents: res.data });
      });
    });
  }

  render () {
    const currentDay = new Date();
    
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
            { this.state.futureEvents.map((event, index) => {
                console.log("event is", index, event);
                return (
                  <SingleEvent 
                    key={index}
                    simplifiedClub={(event.place) ? event.place.name : "biatch"}
                    eventDate={new Date(event.start_time)}
                    eventName={(event.name) ? event.name : "wtf man get a name"}
                  />
                );
              })
            }
          </div>
          <hr 
            className="events-hr" />
          <div style={{textAlign: "center"}}>
            <span className="events-subtitle-text">What you missed</span>
          </div>
          <div className="events-display">
             { this.state.pastEvents.map((event, index) => {
                 return (
                    <SingleEvent 
                      key={index}
                      simplifiedClub={(event.place) ? event.place.name : "biatch"}
                      eventDate={new Date(event.start_time)}
                      eventName={(event.name) ? event.name : "wtf man get a name"} />
                 );
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
