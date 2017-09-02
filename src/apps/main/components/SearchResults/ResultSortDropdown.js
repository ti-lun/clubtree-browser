/* @flow */

import React, { Component } from "react";
import { Input } from "reactstrap";

export const SORT_TYPES = ["Relevancy", "Best", "Popularity", "New"];

export default class ResultSortDropdown extends Component {
  render() {
    const options = SORT_TYPES.map((item, key) => {
      return (
        <option key={key}>
          {item}
        </option>
      );
    });

    return (
      <div>
        <Input type="select">
          {options}
        </Input>
      </div>
    );
  }
}
