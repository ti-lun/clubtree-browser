/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

import { CATEGORIES_ICONS_MAP } from "../../lib/consts";

export default class CategoriesCheckbox extends Component {
  render() {
    const generatedCheckboxes = [];
    for (let key in CATEGORIES_ICONS_MAP) {
      generatedCheckboxes.push(
        <div key={key} >
          <Input
            type="checkbox"
            onChange={() => this.props.toggleCategoryFilter(key)}
            checked={_.includes(this.props.categoriesFilter, key)}
          />
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
