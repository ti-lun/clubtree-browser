/* @flow */

import axios from "axios";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col } from "reactstrap";

import Header from "../components/Header";
import CategoriesCheckbox from "../components/SearchResults/CategoriesCheckbox";
import ColorfulSelector from "../components/ColorfulSelector";
import SearchBar from "../components/SearchBar";
import ResultSortDropdown from "../components/SearchResults/ResultSortDropdown";
import ClubResultsList from "../components/SearchResults/ClubResultsList";

import { VIBES } from "../lib/consts";

import {
  simpleSearchClub,
  toggleVibeFilter,
  toggleCategoryFilter
} from "../actions/searchResultsActions";

export class SearchResults extends Component {
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

  componentDidMount() {
    // const query = this.props.location.query.term;
    // if (query) {
    //   return axios.get("/api/clubs?q=" + query).then(data => {
    //     this.props.simpleSearchClub(data.data);
    //   });
    // }
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.searchResults !== this.props.searchResults)
  }

  render() {
    return (
      <div className="container">
        <Helmet title="SearchResults" />
        <Header type="main" />
        <Row>
          <Col md="4">
            <SearchBar
              searchBarStyleClass="results-page-search"
              term={this.props.location.query.term}
              search={true}
            />
            <div className="searchresults-categories mild-shadow">
              <h2>Categories</h2>
              <CategoriesCheckbox
                qFilter={this.props.location.query.term}
                toggleCategoryFilter={this.props.toggleCategoryFilter}
                categoriesFilter={this.props.categoriesFilter}
              />
            </div>
            <div className="mild-shadow searchresults-vibes">
              <h2>Vibes</h2>
              <ColorfulSelector
                selectorAction={this.props.toggleVibeFilter}
                selectorReducer={this.props.vibesFilter}
                selectorKeys={VIBES}
                categories={true}
                inline={true}
               />
            </div>
          </Col>
          <Col
            md="8"
            style={{
              backgroundColor: "white",
              padding: "20px 0px 20px 40px",
              margin: "0px 0px 20px 0px"
            }}
          >
            Sort clubs by:
            <ResultSortDropdown />
            <ClubResultsList
              term={this.props.location.query.term}
              searchResults={this.props.searchResults}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    searchResults: state.searchResultsReducer.searchResults,
    vibesFilter: state.searchResultsReducer.vibesFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter
  }),
  dispatch =>
    bindActionCreators(
      {
        simpleSearchClub,
        toggleVibeFilter,
        toggleCategoryFilter
      },
      dispatch
    )
)(SearchResults);
