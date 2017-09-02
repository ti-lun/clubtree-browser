/* @flow */

import React, { Component } from "react";
import { COLORS, CATEGORIES_ICONS_MAP } from "../lib/consts";
import { Button } from "reactstrap";
import FontAwesome from "compiled/react-fontawesome";

export default class CategorySelector extends Component {
  render() {
    const generatedButtons = [];
    let index = 0;
    for (let key in CATEGORIES_ICONS_MAP) {
      generatedButtons.push(
        <Button
          className="btn"
          style={{
            backgroundColor:
              COLORS[Math.floor((index + 1) / 2) % COLORS.length],
            border: 0,
            color: "white",
            fontSize: "14px",
            margin: "0px 5px 5px 5px",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          {key}&nbsp;{" "}
          <FontAwesome
            name={CATEGORIES_ICONS_MAP[key]}
            color="white"
            size="2x"
          />
        </Button>
      );
      index++;
    }

    return (
      <div style={{ margin: "20px" }}>
        {generatedButtons}
      </div>
    );
  }
}
