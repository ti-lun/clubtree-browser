/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { COLORS, VIBES } from "../lib/consts";
import { Button } from "reactstrap";

export default class VibeSelector extends Component {
  render() {
    const generatedVibes = [];
    let index = 0;
    for (const key in VIBES) {
      generatedVibes.push(
        <h4 key={key}>
          {key}
        </h4>
      );

      for (const item in VIBES[key]) {
        generatedVibes.push(
          <button
            key={key + ":" + item}
            className={
              (this.props.vibesFilter.includes(VIBES[key][item])) ?
                "searchresults-vibes-btn searchresults-vibes-btn-active" :
                "searchresults-vibes-btn searchresults-vibes-btn-inactive"
            }
            style={{
              backgroundColor: COLORS[index],
            }}
            onClick={() => {
              this.props.toggleVibeFilter(VIBES[key][item])
            }}>
            {VIBES[key][item]}
          </button>
        );
      }
      index++;
    }

    return (
      <div>
        {generatedVibes}
      </div>
    );
  }
}
