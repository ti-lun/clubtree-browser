/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  setTermFilter,
} from "../actions/searchResultsActions";

import logo from "../assets/images/site-logo/entirelogo.png";
import desc1 from "../assets/images/homepage/milktea.jpg";
import desc2 from "../assets/images/homepage/crowd.jpg";
import desc3 from "../assets/images/homepage/updates.jpg";
import katie from "../assets/images/homepage/katie.png";
import david from "../assets/images/homepage/david.jpg";
import bryan from "../assets/images/homepage/bryan.png";
import feedback from "../assets/images/homepage/feedback.png";




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
            <div style={{ margin: "50px" }}>
              <h1
                className="front-splash-font"
                style={{
                  color: "#f7f6f6"
              }}>
                Find your club.
              </h1>
              <span
                className="front-splash-subtitle"
                style={{
                  color: "#f7f6f6"
              }}>Trying to find a group of people to hang or work with at UC Irvine?  Search for a hobby, a subject, a name of a club...
              </span>
            </div>
            <SearchBar
              searchBarStyleClass="front-page-search"
              termFilter={this.props.termFilter}
              setTermFilter={this.props.setTermFilter}
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
                  Clubtree is...*
                </span>
                <p style={{
                  color: "white",
                  fontSize: "12px"
                }}>still developing these features, of course</p>
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
          <h2 className="home-organizer-hook" style={{ color: "#f7f6f6" }}>
            Are you a club organizer?
          </h2>
        </div>

        <div className="home-organizer-header">
          We appreciate your hard work in supporting the backbone of your
          university's culture. Now let's make your jobs easier.
        </div>

        <div className="home-organizer-info">
          <p>Think of it this way: what makes up a university's personality and culture?  What do you tend to fondly remember about your university experience if and when you graduate?  Surely it's not the boring essays and assignments... it's the people you form strong bonds with.  Clubs are the epicenter of this phenomenon and serve as the bulk of a university's identity. We at Clubtree are grateful for your presence and leadership.</p>
          <p>Chances are, your club is listed on Clubtree already.  If you would like to claim your club or add your club, contact us at <strong>clubtreeteam@gmail.com</strong> and we can can give you the next steps.</p>
        </div>

        <div className="home-developers">
          <span className="home-developers-header">Hi, we made this app!</span>
          <Row>
            <Col className="home-developers-col">
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <img src={katie} className="rounded-circle img-fluid home-developers-pic" /><br />
                  <span className="home-developers-subtitle1">Katharine Bui</span><br />
                  <span className="home-developers-subtitle2">Founder</span><br />
                  <span className="home-developers-subtitle3">
                    <a href="http://ti-lun.github.io" target="/">ti-lun.github.io</a>
                  </span><br />

                </Col>
                <Col>
                  When Katharine wasn't coding, she was on the board of some campus organization or attending a meeting of one.  Noticing that there was a gap between students and organizers, she kicked off Clubtree one winter break on her own.  She's super interested in startups, artificial intelligence and the social ramifications of technology (go debate with her!).  Other than programming or UI/UX design, she's singing Ariana Grande songs at the top of her lungs.
                </Col>
              </Row>
            </Col>
            <Col className="home-developers-col">
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <img src={david} className="rounded-circle img-fluid home-developers-pic" />
                  <br />
                    <span className="home-developers-subtitle1">David Dinh</span><br />
                    <span className="home-developers-subtitle2">Software Engineer<br /> & Dev Ops</span><br />
                </Col>
                <Col>
                              Kids have names? Actually, that's still true. Who's brave enough to fly into something we all keep calling a death sphere? It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels.'
                </Col>
              </Row>
            </Col>
            <Col className="home-developers-col">
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <img src={bryan} className="rounded-circle img-fluid home-developers-pic" />
                  <br />
                  <span className="home-developers-subtitle1">Bryan Liu</span><br />
                  <span className="home-developers-subtitle2">Web/Mobile Intern</span><br />

                </Col>
                <Col>
                              Kids have names? Actually, that's still true. Who's brave enough to fly into something we all keep calling a death sphere? It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels.'
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="home-feedback">
          <Row>
            <Col>
              <span className="home-developers-header">Feedback?<br /></span>
              <p style={{
                margin: "20px 10px 20px 10px"
              }}>We are always trying to make Clubtree better and better.  If you find a bug, have a suggestion or just want to say something nice (and make our day!), drop us a comment!</p>
              <div style={{ textAlign: "center" }}>
                <button className="home-feedback-send-msg">Send us a message</button>
              </div>
            </Col>
            <Col>
            <img
              src={feedback}
              className="img-fluid"
              width="50%"
              style={{
                padding: "5%",
                float: "right"
              }}
            /></Col>
          </Row>
        </div>


      </div>
    );
  }
}

export default connect(
  state => ({
    termFilter: state.searchResultsReducer.termFilter,
  }),
  dispatch => bindActionCreators({
    setTermFilter
  }, dispatch)
)(FrontPage);
