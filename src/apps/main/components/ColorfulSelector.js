/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { COLORS } from "../lib/consts";
import { Row, Col, Button } from "reactstrap";

export default class ColorfulSelector extends Component {
  render() {
    const generatedKeys = [];
    let index = 0;
    for (const key in this.props.selectorKeys) {
      if (this.props.categories) {
        generatedKeys.push(
          <h4 key={key}>
            {key}
          </h4>
        );

        for (const item in this.props.selectorKeys[key]) {
          generatedKeys.push(
            <button
              key={key + ":" + item}
              className={
                (this.props.selectorReducer.includes(this.props.selectorKeys[key][item])) ?
                  "searchresults-vibes-btn searchresults-vibes-btn-active" :
                  "searchresults-vibes-btn searchresults-vibes-btn-inactive"
              }
              style={{
                backgroundColor: COLORS[index],
              }}
              onClick={() => {
                this.props.selectorAction(this.props.selectorKeys[key][item])
              }}>
              {this.props.selectorKeys[key][item]}
            </button>
          );
        }
      } else {
        const width = (this.props.inline) ? null : "100%";
        generatedKeys.push(
          <button
            key={key}
            className={
              (this.props.selectorReducer.includes(key) ?
                "searchresults-vibes-btn searchresults-vibes-btn-active" :
                "searchresults-vibes-btn searchresults-vibes-btn-inactive"
              )
            }
            style={{
              backgroundColor: COLORS[Math.floor(index / 2) % COLORS.length],
              width: width
            }}
            onClick={() => {
              this.props.selectorAction(key)
            }}>
              {key}&nbsp;{" "}
              <i
                className={`fa fa-2x fa-${this.props.selectorKeys[key]}`}
                style={{
                  color: "#FFFFFF"
                }}
              ></i>
          </button>
        );
      }
      index++;
    }

    const gridButtons = [];
    if (this.props.grid) {
      for (let i = 0; i < generatedKeys.length; i++) {
        gridButtons.push(
          <Row>
            <Col>
              {generatedKeys[i]}
            </Col>
            <Col>
              {generatedKeys[i + 1]}
            </Col>
          </Row>
        );
        i++;
      }
    }

    return (
      <div>
        {this.props.inline ? generatedKeys : gridButtons}
      </div>
    );
  }
}
