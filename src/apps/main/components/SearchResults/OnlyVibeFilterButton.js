/* @flow */

import _ from "lodash";
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router";
import { generateSearchURL } from "./../../lib/utils";

export default class OnlyVibeFilterButton extends Component {
    render() {

        let query = {
            q: this.props.termFilter,
            category: this.props.categoriesFilter,
            vibe: this.props.vibesFilter,
        };

        let url = generateSearchURL(query);

        return (
            <Link to={url}>
                <button
                    className="btn searchresults-vibes-btn"
                    onClick={() => {
                        this.props.setTermFilter();
                        this.props.setVibeFilter([this.props.label]);
                        this.props.fetchClubSearchResults(query);
                    }}>
                    {this.props.label}
                </button>
            </Link>
        );
    }
}
