/* @flow */

import _ from "lodash";
import { Link } from 'react-router'
import React, { Component } from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

import { generateSearchURL } from "../../lib/utils"
import { CATEGORIES_ICONS_MAP } from "../../lib/consts";

export default class CategoriesCheckbox extends Component {

  render() {
    const generatedCheckboxes = [];
    for (let key in CATEGORIES_ICONS_MAP) {
      const checked = _.includes(this.props.categoriesFilter, key);

      let query;

      if (checked) {
        query = {
          q: this.props.termFilter,
          vibe: this.props.vibesFilter,
          category: _.uniq(_.without(this.props.categoriesFilter, key))
        };
      } else {
        query = {
          q: this.props.termFilter,
          vibe: this.props.vibesFilter,
          category: _.uniq(_.concat(this.props.categoriesFilter, key))
        };
      }

      generatedCheckboxes.push(
        <div key={key} >
          <input
            type="checkbox"
            onClick={() => {
              this.props.setLoading(true);
              this.props.toggleCategoryFilter(key);
              // this.props.fetchClubSearchResults(query);
            }}
            checked={checked}
          />
          &nbsp; <span className="searchresults-categories-label">{key}</span>
        </div>
      );
    }

    return (
      <div>
        {generatedCheckboxes}
      </div>
    );
  }
}
