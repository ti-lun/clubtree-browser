/* @flow */

import qs from "qs";
import axios from "axios";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col } from "reactstrap";

import Header from "../components/Header";
import CategoriesCheckbox from "../components/SearchResults/CategoriesCheckbox";
import VibeFilterSelector from "../components/VibeFilterSelector";
import SearchBar from "../components/SearchBar";
import ResultSortDropdown from "../components/SearchResults/ResultSortDropdown";
import ClubResultsList from "../components/SearchResults/ClubResultsList";

import { VIBES, COLORS } from "../lib/consts";

import {
  setTermFilter,
  simpleSearchClub,
  toggleVibeFilter,
  setCategoryFilter,
  setVibeFilter,
  toggleCategoryFilter,
  fetchClubSearchResults
} from "../actions/searchResultsActions";

const paramsSerializer = function (params) {
  let paramString = qs.stringify(params, { arrayFormat: 'repeat' });
  console.log('params: ' + paramString);
  return paramString;
}

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
  static gsBeforeRoute(/* {dispatch}, renderProps, query, serverProps */) { }

  componentDidMount() {
    let params = {
      q: this.props.location.query.q,
      vibe: this.props.location.query.vibe,
      category: this.props.location.query.category
    };

    if (this.props.location.query.q) {
      this.props.setTermFilter(this.props.location.query.q);
    }

    if (this.props.location.query.category) {
      if (_.isArray(this.props.location.query.category)) {
        this.props.setCategoryFilter(this.props.location.query.category);
      } else {
        this.props.setCategoryFilter([this.props.location.query.category]);
      }
    } else {
      this.props.setCategoryFilter([]);
    }

    if (this.props.location.query.vibe) {
      if (_.isArray(this.props.location.query.vibe)) {
        this.props.setVibeFilter(this.props.location.query.vibe);
      } else {
        this.props.setVibeFilter([this.props.location.query.vibe]);
      }
    } else {
      this.props.setVibeFilter([]);
    }

    return this.props.fetchClubSearchResults(params);
  }

  componentWillReceiveProps(newProps) {

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
              termFilter={this.props.termFilter}
              vibesFilter={this.props.vibesFilter}
              categoriesFilter={this.props.categoriesFilter}
              setTermFilter={this.props.setTermFilter}
              fetchClubSearchResults={this.props.fetchClubSearchResults}
              search={true}
            />
            <div className="searchresults-categories mild-shadow">
              <h2>Categories</h2>
              <CategoriesCheckbox
                termFilter={this.props.termFilter}
                categoriesFilter={this.props.categoriesFilter}
                vibesFilter={this.props.vibesFilter}
                toggleCategoryFilter={this.props.toggleCategoryFilter}
                fetchClubSearchResults={this.props.fetchClubSearchResults}
              />
            </div>
            <div className="mild-shadow searchresults-vibes">
              <h2>Vibes</h2>
              <div className="margin-bottom-20px">
                <h4>Group tightness</h4>
                <VibeFilterSelector
                  termFilter={this.props.termFilter}
                  categoriesFilter={this.props.categoriesFilter}
                  fetchClubSearchResults={this.props.fetchClubSearchResults}
                  selectorAction={this.props.toggleVibeFilter}
                  selectorReducer={this.props.vibesFilter}
                  selectorKeys={VIBES['Group tightness']}
                  buttonColor={COLORS[0]}
                />
              </div>
              <div className="margin-bottom-20px">
                <h4>Energy</h4>
                <VibeFilterSelector
                  termFilter={this.props.termFilter}
                  categoriesFilter={this.props.categoriesFilter}
                  fetchClubSearchResults={this.props.fetchClubSearchResults}
                  selectorAction={this.props.toggleVibeFilter}
                  selectorReducer={this.props.vibesFilter}
                  selectorKeys={VIBES['Energy']}
                  buttonColor={COLORS[1]}
                />
              </div>

              <div className="margin-bottom-20px">
                <h4>Personality</h4>
                <VibeFilterSelector
                  termFilter={this.props.termFilter}
                  categoriesFilter={this.props.categoriesFilter}
                  fetchClubSearchResults={this.props.fetchClubSearchResults}
                  selectorAction={this.props.toggleVibeFilter}
                  selectorReducer={this.props.vibesFilter}
                  selectorKeys={VIBES['Personality']}
                  buttonColor={COLORS[2]}
                />
              </div>
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
              term={this.props.termFilter}
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
    termFilter: state.searchResultsReducer.termFilter,
    vibesFilter: state.searchResultsReducer.vibesFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter
  }),
  dispatch => bindActionCreators({
    setTermFilter,
    simpleSearchClub,
    setVibeFilter,
    toggleVibeFilter,
    setCategoryFilter,
    toggleCategoryFilter,
    fetchClubSearchResults
  }, dispatch)
)(SearchResults);
