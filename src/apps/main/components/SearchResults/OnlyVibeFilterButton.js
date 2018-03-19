/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router";
import { generateSearchURL } from "./../../lib/utils";

export default class OnlyVibeFilterButton extends Component {
    render() {
        return (
            <button
                className="btn searchresults-vibes-btn"
                onClick={() => {
                    this.props.setLoading(true);
                    this.props.setTermFilter();
                    this.props.setVibeFilter([this.props.label]);
                }}>
                {this.props.label}
            </button>
        );
    }
}
