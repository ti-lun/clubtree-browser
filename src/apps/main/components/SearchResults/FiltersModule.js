/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";

import CategoriesCheckbox from "./CategoriesCheckbox";
import VibeFilterSelector from "../VibeFilterSelector";

export default class FiltersModule extends Component {
  static PropTypes = {
    xButtonFunc: PropTypes.function
  };

  render () {
    return (
      <div
        className="searchresults-filter-module"
      >
      </div>
    );
  }
}
