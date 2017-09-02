/* @flow */

import React, { Component } from "react";
import { COLORS, VIBES } from "../lib/consts";
import { Button } from "reactstrap";

export default class VibeSelector extends Component {
  render() {
    const generatedVibes = [];
    let index = 0;
    for (const key in VIBES) {
      generatedVibes.push(
        <h4>{ key }</h4>
      );

      for (const item in VIBES[key]) {
        generatedVibes.push(
          <Button className="btn"
            style={{
              backgroundColor: COLORS[index],
              border: 0,
              color: "white",
              fontSize: "14px",
              margin: "0px 5px 5px 5px",
              borderRadius: "10px",
              padding: "10px 15px 10px 15px"
            }}>
            { VIBES[key][item] }
          </Button>
          );
      }
      index++;
    }

    return (
      <div>
        { generatedVibes }
      </div>
    );
  }
}
