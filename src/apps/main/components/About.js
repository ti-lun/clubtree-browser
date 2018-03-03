/* @flow */

import React, { Component } from "react";
import {Row, Col} from "reactstrap";
import desc1 from "../assets/images/homepage/milktea.jpg";
import desc2 from "../assets/images/homepage/crowd.jpg";
import desc3 from "../assets/images/homepage/updates.jpg";
import chloe from "../assets/images/homepage/chloe.png";
import david from "../assets/images/homepage/david.jpg";
import bryan from "../assets/images/homepage/bryan.png";
import feedback from "../assets/images/homepage/feedback.png";
export default class About extends Component {
  render () {
    return (
      <div>
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
                <img src={chloe} className="rounded-circle img-fluid home-developers-pic" /><br />
                <span className="home-developers-subtitle1">Chloé Agápe</span><br />
                <span className="home-developers-subtitle2">Founder</span><br />
                <span className="home-developers-subtitle3">
                  <a href="http://ti-lun.github.io" target="/">ti-lun.github.io</a>
                </span><br />

              </Col>
              <Col>
                When Chloé wasn't coding, she was on the board of some campus organization or attending a meeting of one.  Noticing that there was a gap between students and organizers, she kicked off Clubtree one winter break on her own.  She's super interested in startups, artificial intelligence and the social ramifications of technology (go debate with her!).  Other than programming or UI/UX design, she's singing Ariana Grande songs at the top of her lungs.
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
                David has a passion for growing his skills in software development, being particularly interested in creating something for UCI students to use.  In his spare time, he likes to play video games and go food adventuring in Orange County.  Fun fact: he uses a game controller as a mouse when developing.
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
                Bryan Liu is a student at UCI with goals of becoming a leader by utilizing the potential of virtual reality in order to improve the quality of life of people from all walks of life. He grew up in Northern California which has undoubtedly contributed to his extreme aversion to hot weather. Having previously worked as a cancer research assistant at Stanford University as well as a marketing assistant at a design firm, he has found his true passion in his love for programming.

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
            }}>We are always trying to make Clubtree better and better.  If you find a bug, have a suggestion or just want to say something nice (and make our day!), drop us a comment at <strong>clubtreeteam@gmail.com</strong>!</p>
            <div style={{ textAlign: "center" }}>
              
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
