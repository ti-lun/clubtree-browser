/* @flow */

import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router";


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
                src={pic} /><br /><br/>
              <h3>{this.props.user.name.first}</h3><br/>
              <h5>{this.props.user.simpleClubData.role}</h5>
              <h6>of</h6>
              <h5>{this.props.user.currentClub.clubName}</h5>
            </div>
          </Col>
          <Col>
            <div className="dashboard-box mild-shadow">
              <Row>
                <Col>
                  <Link to={`/club/${this.props.user.simpleClubData.club}`}>
                    <div className="thin-shadow dashboard-action action-1">
                      <i className="fa fa-th fa-3x" aria-hidden="true"></i><br /><br />
                      View<br />
                      club profile
                    </div>
                  </Link>
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
              <Row>
                <Col>
                  <Link to={`/clubcreation/${this.props.user.simpleClubData.club}`}>
                    <div className="thin-shadow dashboard-action action-1">
                      <i className="fa fa-pencil fa-3x" aria-hidden="true"></i><br /><br />
                      Edit<br />
                      club profile
                    </div>
                  </Link>
                </Col>
                  <Col>
                    <Link to={`/clubcreation/${this.props.user.simpleClubData.club}`}>
                      <div className="thin-shadow dashboard-action action-2">
                        <i className="fa fa-ban fa-3x" aria-hidden="true"></i><br /><br />
                        Delete club<br />
                      </div>
                    </Link>
                  </Col>
              </Row>
            </div>
          </Col>
        </Row>

      </div>
    );
  }
}
