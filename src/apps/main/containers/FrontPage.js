/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import {
  setTermFilter,
  toggleCategoryFilter
} from "../actions/searchResultsActions";

import { Row, Col } from "reactstrap";
import logo from "../assets/images/site-logo/entirelogo.png";
import desc1 from "../assets/images/homepage/milktea.jpg";
import desc2 from "../assets/images/homepage/crowd.jpg";
import desc3 from "../assets/images/homepage/updates.jpg";
import Header from "../components/Header";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          img: "../images/homepage/front.jpg",
          description: "asdfsdf"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div
          id="bootstrap-override-jumbotron"
          className="text-xs-center home-initial-picture background-cover-center front-splash nopad-bottom"
          style={{
            margin: "0 !important",
            border: 0,
            height: "100%"
          }}
        >
          <div id="text-center">
            <div style={{margin: "50px"}}>
              <h1
                className="front-splash-font"
                style={{
                  color: "#f7f6f6"
              }}>
                Find your club.
              </h1>
              <span
                className="front-splash-subtitle"
                style={{ color: "#f7f6f6"
              }}>Trying to find a group of people to hang or work with at UC Irvine?  Search for a hobby, a subject, a name of a club...
              </span>
            </div>
            <SearchBar
              searchBarStyleClass="front-page-search"
              termFilter={this.props.termFilter}
              categoriesFilter={this.props.categoriesFilter}
              setTermFilter={this.props.setTermFilter}
              search={true}
            />
          </div>
        </div>

        <div className="subdiv home-intro">
          <Row>
            <Col>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              >
                <span id="intro-text" style={{ color: "white" }}>
                  Clubtree is...
                </span>
              </div>
            </Col>
            <Col>
              <div style={{
                  color: "white"
                }}>
                <p id="intro-text-per">your promo flyers.
                  <i
                    style={{
                      float: "right",
                      marginRight: "30%"
                    }}
                    className="fa fa-newspaper-o"
                    aria-hidden="true"></i>
                </p>
                <p id="intro-text-per">
                  your club announcements.
                  <i
                  style={{
                    float: "right",
                    marginRight: "30%"
                  }}
                    className="fa fa-bullhorn"
                    aria-hidden="true"></i>
                </p>
                <p id="intro-text-per">
                  your members and officers.
                  <i
                  style={{
                    float: "right",
                    marginRight: "30%"
                  }}
                    className="fa fa-users"
                    aria-hidden="true"></i>

                </p>
                <p id="intro-text-per">
                  all in one place.
                  <i
                  style={{
                    float: "right",
                    marginRight: "30%"
                  }}
                  className="fa fa-home"
                  aria-hidden="true"></i>

                </p>
              </div>

            </Col>
          </Row>
        </div>

        <Row style={{ height: "100%", margin: 0 }}>
          <Col id="bootstrap-override-pic" md={"4"} style={{ margin: 0 }}>
            <img src={desc1} className="img-responsive pic-sizes" />
          </Col>
          <Col id="bootstrap-override-pic" md={"4"} style={{ margin: 0 }}>
            <img src={desc2} className="img-responsive pic-sizes" />
          </Col>
          <Col id="bootstrap-override-pic" md={"4"} style={{ margin: 0 }}>
            <img src={desc3} className="img-responsive pic-sizes" />
          </Col>
        </Row>

        <Row style={{ height: "100%", display: "flex", margin: 0 }}>
          <Col
            className="home-perks-description-one"
            id="bootstrap-override-desc"
            style={{ color: "#f7f6f6" }}
          >
            <div>
            Easily find free food and club fundraisers

            </div>
          </Col>
          <Col
            className="home-perks-description-two"
            id="bootstrap-override-desc"
            style={{ color: "#f7f6f6" }}
          >
            Look for your type of crowd just a couple clicks away
          </Col>
          <Col
            className="home-perks-description-three"
            id="bootstrap-override-desc"
            style={{ color: "#f7f6f6" }}
          >
            Get instantly updated on your favorite clubs
          </Col>
        </Row>

        <div className="home-organizer-picture background-cover-center text-center">
          <h1 className="front-splash-font" style={{ color: "#f7f6f6" }}>
            Are you a club organizer?
          </h1>
        </div>

        <div className="home-organizer-header">
          We appreciate your hard work in supporting the backbone of your
          university's culture. Now let's make your jobs easier.
        </div>

        <div className="home-organizer-info">
          Have no idea where to start when creating your club?  Don't worry; there's a wizard to help you out.
        </div>

      </div>
    );
  }
}

export default connect(
  state => ({
    termFilter: state.searchResultsReducer.termFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter
  }),
  dispatch => bindActionCreators({
    setTermFilter
  }, dispatch)
)(FrontPage);
