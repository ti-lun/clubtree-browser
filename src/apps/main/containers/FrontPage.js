/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Row, div } from "reactstrap";
import { browserHistory } from "react-router";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  setTermFilter,
} from "../actions/searchResultsActions";

import logo from "../assets/images/site-logo/entirelogo.png";

import academics from "../assets/images/homepage/academics.png";
import arts from "../assets/images/homepage/arts.png";
import community from "../assets/images/homepage/community.png";
import grad from "../assets/images/homepage/grad.png";
import hobbies from "../assets/images/homepage/hobbies.png";
import greek from "../assets/images/homepage/greek.png";
import multicultural from "../assets/images/homepage/multicultural.png";
import politics from "../assets/images/homepage/politics.png";
import religious from "../assets/images/homepage/religious.png";
import sports from "../assets/images/homepage/sports.png";




class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  searchCategory = (e) => {
    this.props.setTermFilter(e.target.getAttribute("value"));
    browserHistory.push("/search");
  }

  render() {
    
    const categoryMap = {
      "Academics and Professional": academics,
      "Greek Life": greek,
      "Multicultural and Heritage": multicultural,
      "Community Service": community,
      "Sports, Fitness and Well-being": sports,
      "Performing and Creative Arts": arts,
      "Hobbies": hobbies,
      "Religious and Spiritual": religious,
      "Graduate Students": grad,
      "Politics": politics
    };
    
    const icons = [];
    for (let key in categoryMap) {
      icons.push((
        <div 
          className="home-cat-box"
          onClick={this.searchCategory}
          value={key}  
        >
          <div className="home-cat-aspect-ratio">
            <img className="home-cat-img" src={categoryMap[key]} />
          </div>
          <span className="home-cat-font">{key}</span>
        </div>
      ));  
    }

    
    return (
      <div>
        <div
          className="text-xs-center home-initial-picture background-cover-center front-splash nopad-bottom"
          style={{
            margin: "0 !important",
            border: 0,
            height: "100%",
            backgroundPosition: "center",
            overflow:"scroll"
          }}
        >
        <Header 
          showSearch={false}
        />
        <div 
          id="text-center"
          style={{ margin: "5%" }}>
            <span
              className="home-title"
            >
              Find your club.
            </span>
            <span
              className="home-subtitle"
            >Trying to find a group of people to hang or work with at UC Irvine?
            </span>
          <SearchBar
            searchBarStyleClass="home-page-search"
            termFilter={this.props.termFilter}
            setTermFilter={this.props.setTermFilter}
          />
        </div>
      </div>
      <div 
        style={{
          margin: "5% 10% 5% 10%",
          textAlign: "center"
        }}
      >
        <span className="home-tag">Begin discovering clubs instantly.</span>
          <div className="home-cat-flex">
            {icons}
          </div>
      </div>
      <Footer />
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
