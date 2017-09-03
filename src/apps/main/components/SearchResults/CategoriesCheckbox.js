/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Button } from "reactstrap";

import { CATEGORIES_ICONS_MAP } from "../../lib/consts";

export default class CategoriesCheckbox extends Component {
  render() {
    const generatedCheckboxes = [];
    for (let key in CATEGORIES_ICONS_MAP) {
      generatedCheckboxes.push(
        <div>
          <Button
            onClick={() => this.props.toggleCategoryFilter(key)}
            active={_.includes(this.props.categoriesFilter, key)}
          >
            {key}
          </Button>
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
