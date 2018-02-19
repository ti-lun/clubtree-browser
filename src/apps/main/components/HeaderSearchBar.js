/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HeaderSearchBar extends Component {
  static PropTypes = {
    show: PropTypes.boolean,
    termFilter: PropTypes.string,
    vibesFilter: PropTypes.array,
    categoriesFilter: PropTypes.array,
    setLoading: PropTypes.function,
    setTermFilter: PropTypes.function,
    fetchClubSearchResults: PropTypes.function
  };

  constructor(props) {
    super(props);
    this.state = {
      textInput: props.termFilter
    };
  }

  moveCaretAtEnd = (e) => {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  onChange = (event) => {
    if (event.target.value) {
      this.setState({ textInput: event.target.value });
    } else {
      this.setState({ textInput: undefined });
    }
  }

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      const query = {
        q: this.state.textInput,
        vibe: this.props.vibesFilter,
        category: this.props.categoriesFilter
      };

      this.props.setLoading(true);
      this.props.setTermFilter(this.state.textInput);
      this.props.fetchClubSearchResults(query);
    }
  }

  render() {
    const query = {
      q: this.state.textInput,
      vibe: this.props.vibesFilter,
      category: this.props.categoriesFilter
    };

    const searchButton = (
      <button
        style={{
          border: "none",
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          this.props.setLoading(true);
          this.props.setTermFilter(this.state.textInput);
          this.props.fetchClubSearchResults(query);
        }}>
        <i className="fa fa-2x fa-search" aria-hidden="true" style={{ color: "#ff3823" }} />
      </button >
    );

    return (
      (this.props.show) ? 
      <div className="text-center">
        <input
          type="text"
          className="header-page-search"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          value={this.state.textInput}
          autoFocus={true}
          onFocus={this.moveCaretAtEnd}
        />
        {searchButton}
      </div> :
      null
    );
  }
}
