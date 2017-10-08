/* @flow */

import React, { Component } from "react";
import { Row, Button, Col, Input } from "reactstrap";

export default class QuestionUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  setActive = () => {
    if (this.state.active === false) {
      this.setState({
        active: true
      });
    }
  }

  setInactive = () => {
    this.setState({
      active: false
    });
  }

  render () {
    const activeClass = (this.state.active) ? "margin-bottom-5px clubcreation-active-slot" : "margin-bottom-5px clubcreation-inactive-slot";
    return (
      <Row
        onClick={this.setActive}
        className={activeClass}>
        <Col md={6}>{ this.props.question }</Col>
        <Col md={5}>
          <input
            type="text"
            className="clubcreation-small-input"
          />
        </Col>
        <Col md={1}>
          <Button
            onClick={this.setInactive}
            >
            <i className="fa fa-minus-circle"
               aria-hidden="true"
               ></i>
          </Button>
        </Col>
      </Row>
    );
  }
}
