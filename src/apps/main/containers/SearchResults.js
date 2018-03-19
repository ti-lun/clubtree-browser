/* @flow */

import _ from "lodash";
import qs from "qs";
import axios from "axios";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Row, Col } from "reactstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ComplexCategorySelector from "../components/SearchResults/ComplexCategorySelector";
import SearchPagination from "../components/SearchResults/SearchPagination";
import SearchBar from "../components/SearchBar";
import ResultSortDropdown from "../components/SearchResults/ResultSortDropdown";
import ClubResultsList from "../components/SearchResults/ClubResultsList";
import FiltersModule from "../components/SearchResults/FiltersModule";

import { VIBES, COLORS } from "../lib/consts";

import {
  setLoading,
  setTermFilter,
  toggleVibeFilter,
  setCategoryFilter,
  setVibeFilter,
  toggleCategoryFilter,
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
  static gsBeforeRoute(/* {dispatch}, renderProps, query, serverProps */) { }

  constructor(props) {
    super(props);
    this.state = {
      module: false,
      pageNumber: 0
    };
  }

  componentWillUnmount() {
    this.props.setTermFilter(undefined);
    this.props.setVibeFilter([]);
    this.props.setCategoryFilter([]);
  }


  toggleFilterModule = (e) => {
    this.setState({
      module: !this.state.module,
      top: window.scrollY
    });
  }
  
  changePageNumber = (e) => {
    this.setState({
      pageNumber: e.target.value
    });
  }

  render() {
    
    const button = (
      <button
        className="searchresults-cat-gear"
        onClick={this.toggleFilterModule}
      >
        <i className="fas fa-cog fa-2x"></i>
      </button>
    );
    
    return (
      <div className="searchresults-bg">
        <Helmet title="SearchResults" />
        <div className={(this.state.module) ? "blur-screen" : "trans-1"}>
          <div 
            style={{
              top: this.state.top
            }}
            className={(this.state.module) ? "black-screen" : "trans-1"}></div>

          <Header 
            type="main"
            showSearch={true}
             />

            <Row>
              <Col 
                md={3}>
                <div 
                  style={{
                    margin: "5% 2% 2% 10%"
                  }}
                >
                  <ComplexCategorySelector 
                    termFilter={this.props.termFilter}
                    vibesFilter={this.props.vibesFilter}
                    categoriesFilter={this.props.categoriesFilter}
                    fetchClubSearchResults={this.props.fetchClubSearchResults}
                    selectorAction={this.props.toggleCategoryFilter}
                    selectorReducer={this.props.categoriesFilter}
                    setLoading={this.props.setLoading}
                    setCategoryFilter={this.props.setCategoryFilter}
                  />
                </div>
              </Col>
              <Col 
                md={9}>
                {/* Sort clubs by:
                  <ResultSortDropdown /> */}
                <div 
                  style={{
                    margin: "1% 15% 2% 0%"
                  }}
                  className="searchresults-results"
                >
                  <ClubResultsList
                    pageNumber={this.props.pageNumber}
                    loading={this.props.loading}
                    setLoading={this.props.setLoading}
                    searchResults={this.props.searchResults}
                    termFilter={this.props.termFilter}
                    vibesFilter={this.props.vibesFilter}
                    categoriesFilter={this.props.categoriesFilter}
                    fetchClubSearchResults={this.props.fetchClubSearchResults}
                    setTermFilter={this.props.setTermFilter}
                    setVibeFilter={this.props.setVibeFilter}
                  />
                </div>
              </Col>
            </Row>

            <Footer />
          </div>
          {}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.searchResultsReducer.loading,
    termFilter: state.searchResultsReducer.termFilter,
    vibesFilter: state.searchResultsReducer.vibesFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter
  }),
  dispatch => bindActionCreators({
    setLoading,
    setTermFilter,
    setVibeFilter,
    toggleVibeFilter,
    setCategoryFilter,
    toggleCategoryFilter,
  }, dispatch)
)(SearchResults);
