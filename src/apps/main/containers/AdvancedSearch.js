/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategorySelector from "../components/CategorySelector";
import ColorfulSelector from "../components/ColorfulSelector";

import {
  setTermFilter,
  toggleVibeFilter,
  toggleCategoryFilter
} from "../actions/searchResultsActions";

import exploreImg from "../assets/images/advanced-search/explorer.png";

import { generateSearchURL } from "../lib/utils";
import { CATEGORIES_ICONS_MAP, VIBES } from "../lib/consts";

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
    let query = {
      q: this.props.termFilter,
      category: this.props.categoriesFilter,
      vibe: this.props.vibesFilter
    };
    let url = generateSearchURL(query);
    return (
      <div
        className="container"
        style={{width: "60%"}}
      >
        <Helmet title="AdvancedSearch" />
        <Header type="advancedsearch" />
        <div
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "10px 10px 15px #aaaaaa",
            padding: "40px 20px 40px 40px",
            margin: "50px 0px 20px 0px",
            border: "20px solid #008a9b"
          }}
        >

          <Row>
            <Col md={6}>
              <span className="explore">Explore clubs</span><br /><br />
              <span className="explore-text">Trying to find a club at UC Irvine?  Whether you're trying to look up a particular club or discover the one that's right for you, you can find what you need.</span>
            </Col>
            <Col md={6} style={{textAlign : "center"}}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
                >
                <img
                  src={exploreImg}
                  width={"120%"}
                  alt="Vecteezy vector; artist is twilightmoon"
                  />
              </div>
            </Col>
          </Row>
        </div>
        <div
          style={{
            backgroundColor: "#d6f0f3",
            boxShadow: "10px 10px 15px #aaaaaa",
            padding: "40px 20px 40px 40px",
            margin: "0px 0px 20px 0px"
          }}
        >
          <span className="explore-subheader">Do you have a particular club in mind?</span>
          <SearchBar
            setTermFilter={this.props.setTermFilter}
            searchBarStyleClass="advanced-search" /> <br />
          Examples: part of a club name, a game you are interested in, people
          you know
        </div>
        <div
          style={{
            boxShadow: "10px 10px 15px #aaaaaa",
            padding: "40px 0px 40px 40px",
            margin: "0px 0px 20px 0px",
            backgroundColor: "white"
          }}
        >

          <div className="inner-box-margin">
            <span className="explore-subheader">Or how about picking a category to start with?</span><br/>
            Pick as many as you like.
            <ColorfulSelector
              selectorAction={this.props.toggleCategoryFilter}
              selectorReducer={this.props.categoriesFilter}
              selectorKeys={CATEGORIES_ICONS_MAP}
              inline={true}
            />
          </div>
          <br /><br/>
          <div className="inner-box-margin">
            <span className="explore-subheader">Interested in what a clubs vibes are like?</span><br/>
            Pick as many as you like.
            <ColorfulSelector
              selectorAction={this.props.toggleVibeFilter}
              selectorReducer={this.props.vibesFilter}
              selectorKeys={VIBES}
              inline={true}
              categories={true}
            />
          </div>
        </div>
        <div style={{
          textAlign: "center"
        }}>
          <Link to={url}>
            <Button
              className="clubcreation-continue-btn">
              Continue
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    termFilter: state.searchResultsReducer.termFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter,
    vibesFilter: state.searchResultsReducer.vibesFilter
  }),
  dispatch =>
    bindActionCreators(
      {
        setTermFilter,
        toggleCategoryFilter,
        toggleVibeFilter
      },
      dispatch
    )
)(AdvancedSearch);
