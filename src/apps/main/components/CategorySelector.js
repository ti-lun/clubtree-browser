/* @flow */

import React, { Component } from "react";
import { COLORS, CATEGORIES_ICONS_MAP } from "../lib/consts";
import { Row, Col, Button } from "reactstrap";
import FontAwesome from "compiled/react-fontawesome";

export default class CategorySelector extends Component {
  render() {
    const generatedButtons = [];
    let index = 0;

    for (let key in CATEGORIES_ICONS_MAP) {
      if (this.props.type === "inline") {
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
      } else {
        generatedButtons.push(
          <Button
            className="btn"
            style={{
              backgroundColor: COLORS[Math.floor(index / 2) % COLORS.length],
              border: 0,
              color: "white",
              fontSize: "14px",
              margin: "0px 5px 5px 5px",
              borderRadius: "10px",
              padding: "10px 10px 10px 10px",
              width: "100%"
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
      }
      index++;
    }

    if (this.props.type === "inline") {
      return (
        <div style={{ margin: "20px" }}>
          {generatedButtons}
        </div>
      );
    } else {
      const gridButtons = [];
      for (let i = 0; i < generatedButtons.length; i++) {
        gridButtons.push(
          <Row>
            <Col>
              {generatedButtons[i]}
            </Col>
            <Col>
              {generatedButtons[i + 1]}
            </Col>
          </Row>
        );
        i++;
      }
      return (
        <div style={{ margin: "30px 100px 0px 100px" }}>
          {gridButtons}
        </div>
      );
    }
  }
}
