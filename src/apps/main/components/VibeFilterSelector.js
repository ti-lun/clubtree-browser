/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Link } from 'react-router'

import { generateSearchURL } from "../lib/utils";


export default class VibeFilterSelector extends Component {

  render() {

    const generatedKeys = [];

    this.props.selectorKeys.forEach((item, index) => {

      let className, query, url;
      const active = this.props.selectorReducer.includes(item);

      if (active) {
        className = "searchresults-vibes-btn searchresults-vibes-btn-active";
        query = {
          q: this.props.termFilter,
          category: this.props.categoriesFilter,
          vibe: _.uniq(_.without(this.props.selectorReducer, item))
        };
        url = generateSearchURL(query);
      } else {
        className = "searchresults-vibes-btn searchresults-vibes-btn-inactive";
        query = {
          q: this.props.termFilter,
          category: this.props.categoriesFilter,
          vibe: _.uniq(_.concat(this.props.selectorReducer, item))
        };
        url = generateSearchURL(query);
      }

      generatedKeys.push(
        <button
          key={index}
          className={className}
          style={{
            backgroundColor: this.props.buttonColor,
            margin: "5px"
          }}
          onClick={() => {
            this.props.setLoading(true);
            this.props.selectorAction(item);
            this.props.fetchClubSearchResults(query);
          }}>
          {item}
        </button>
      );
    });

    return (
      <div>
        {generatedKeys}
      </div>
    );
  }
}
