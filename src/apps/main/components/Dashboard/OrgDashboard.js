/* @flow */

import React, { Component } from "react";
import { Row, Col } from "reactstrap";


export default class OrgDashboard extends Component {
  render () {

    const pic = localStorage.getItem("profPicURL");

    return (
      <div>
        <Row>
          <Col>
            <div className="dashboard-box dashboard-centered mild-shadow">
              <img
                className="rounded-circle"
                src={pic} />
              <h3>{this.props.user.name.first}</h3>
            </div>
          </Col>
          <Col>
            <div className="dashboard-box mild-shadow">
              <Row>
                <Col>
                  <div className="thin-shadow dashboard-action action-1">
                    <i className="fa fa-th fa-3x" aria-hidden="true"></i><br /><br />
                    View/edit<br />
                    club profile
                  </div>
                </Col>
                <Col>
                  <div className="thin-shadow dashboard-action action-2">
                    <i className="fa fa-tree fa-3x"></i><br /><br />
                    View/edit<br/>organizer tree
                  </div>
                </Col>
                <Col>
                  <div className="thin-shadow dashboard-action action-3">
                    <i className="fa fa-users fa-3x"></i><br /><br />
                    Add/remove<br />organizers
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

      </div>
    );
  }
}
