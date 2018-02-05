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

  render() {
    return (
      <div>
        <Helmet title="SearchResults" />
        <Header type="main" />
          <div
            style={{
              margin: "2%",
              paddingRight: "2%",
              width: "20%",
              position: "fixed",
              zIndex: 99,
              height: "100%",
              overflowY: "scroll",
              paddingBottom: "10%"
            }}>

              <div className="searchresults-categories mild-shadow">
                <span className="searchresults-filter-header">Categories</span>
                <CategoriesCheckbox
                  termFilter={this.props.termFilter}
                  categoriesFilter={this.props.categoriesFilter}
                  vibesFilter={this.props.vibesFilter}
                  toggleCategoryFilter={this.props.toggleCategoryFilter}
                  fetchClubSearchResults={this.props.fetchClubSearchResults}
                />
              </div>
              <div className="mild-shadow searchresults-vibes">
                <span className="searchresults-filter-header">Vibes</span>
                <div className="margin-bottom-20px">
                  <span className="vibe-category-label">Time commitment</span>
                  <VibeFilterSelector
                    termFilter={this.props.termFilter}
                    categoriesFilter={this.props.categoriesFilter}
                    fetchClubSearchResults={this.props.fetchClubSearchResults}
                    selectorAction={this.props.toggleVibeFilter}
                    selectorReducer={this.props.vibesFilter}
                    selectorKeys={VIBES['Time commitment']}
                    buttonColor={COLORS[0]}
                  />
                </div>
                <div className="margin-bottom-20px">
                  <span className="vibe-category-label">Energy</span>
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
                  <span className="vibe-category-label">Personality</span>
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
          </div>
          <div
            style={{
              float: "right",
              backgroundColor: "white",
              padding: "20px 0px 20px 40px",
              margin: "2% 2% 2% 0%",
              width: "73%"
            }}
          >
            {/* Sort clubs by:
            <ResultSortDropdown /> */}
            <ClubResultsList
              searchResults={this.props.searchResults}
              termFilter={this.props.termFilter}
              vibesFilter={this.props.vibesFilter}
              categoriesFilter={this.props.categoriesFilter}
              fetchClubSearchResults={this.props.fetchClubSearchResults}
              setTermFilter={this.props.setTermFilter}
              setVibeFilter={this.props.setVibeFilter}
            />
          </div>
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
