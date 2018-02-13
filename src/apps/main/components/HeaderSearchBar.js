/* @flow */

import React, { Component } from "react";

export default class HeaderSearchBar extends Component {

  moveCaretAtEnd = (e) => {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  onChange = (event) => {
    if (event.target.value === "") {
      this.props.setTermFilter(undefined);
    } else {
      this.props.setTermFilter(event.target.value);
    }
  }

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      const query = {
        q: this.props.termFilter,
        vibe: this.props.vibesFilter,
        category: this.props.categoriesFilter
      };

      this.props.fetchClubSearchResults(query);
    }
  }

  render() {
    const query = {
      q: this.props.termFilter,
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
        onClick={() => this.props.fetchClubSearchResults(query)}
      >
        <i className="fa fa-2x fa-search" aria-hidden="true" style={{ color: "#ff3823" }} />
      </button >
    );

    return (
      <div className="text-center">
        <input
          type="text"
          className="header-page-search"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          value={this.props.termFilter}
          autoFocus={true}
          onFocus={this.moveCaretAtEnd}
        />
        {searchButton}
      </div>
    );
  }
}
