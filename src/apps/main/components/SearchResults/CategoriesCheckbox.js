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

      let url;

      if (checked) {
        url = generateSearchURL({
          term: this.props.qFilter,
          category: _.uniq(_.without(this.props.categoriesFilter, key))
        });
      } else {
        url = generateSearchURL({
          term: this.props.qFilter,
          category: _.uniq(_.concat(this.props.categoriesFilter, key))
        });
      }

      generatedCheckboxes.push(
        <div key={key} >
          <Link to={url}>
            <Input
              type="checkbox"
              onClick={() => this.props.toggleCategoryFilter(key)}
              checked={checked}
            />
          </Link>
          &nbsp; {key}
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
