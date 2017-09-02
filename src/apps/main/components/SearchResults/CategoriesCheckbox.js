/* @flow */

import React, { Component } from "react";
import { Input } from "reactstrap";

import { CATEGORIES_ICONS_MAP } from "../../lib/consts";

export default class CategoriesCheckbox extends Component {
  render() {
    const generatedCheckboxes = [];
    let index = 0;
    for (let key in CATEGORIES_ICONS_MAP) {
      generatedCheckboxes.push(
        <div>
          <Input type="checkbox" key={key} /> &nbsp;{key}
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
