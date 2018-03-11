/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  setLoading,
  setTermFilter,
  toggleVibeFilter,
  setCategoryFilter,
  setVibeFilter,
  toggleCategoryFilter,
} from "../../actions/searchResultsActions";

import { VIBES, COLORS } from "../../lib/consts";

import CategoriesCheckbox from "./CategoriesCheckbox";
import VibeFilterSelector from "../VibeFilterSelector";

class FiltersModule extends Component {
  static PropTypes = {
    xButtonFunc: PropTypes.function
  };

  render () {
    let visible = (this.props.visible) ? "1" : "0";
    return (
      <div
        className="searchresults-filter-module"
        style={{
          top: 300+this.props.top,
          opacity: visible,
          transition: "1s"
        }}
      >
        <div className="mild-shadow searchresults-vibes">
          <span className="searchresults-filter-header">Vibes</span>
          <div className="margin-bottom-20px">
            <span className="vibe-category-label">Time commitment</span>
            <VibeFilterSelector
              termFilter={this.props.termFilter}
              categoriesFilter={this.props.categoriesFilter}
              selectorAction={this.props.toggleVibeFilter}
              selectorReducer={this.props.vibesFilter}
            />
          </div>
          
          <div className="margin-bottom-20px">
            <span className="vibe-category-label">Energy</span>
            <VibeFilterSelector
              termFilter={this.props.termFilter}
              categoriesFilter={this.props.categoriesFilter}
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
              selectorAction={this.props.toggleVibeFilter}
              selectorReducer={this.props.vibesFilter}
              selectorKeys={VIBES['Personality']}
              buttonColor={COLORS[2]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.searchResultsReducer.loading,
    searchResults: state.searchResultsReducer.searchResults,
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
)(FiltersModule);
