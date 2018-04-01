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
  setLoading,
  setTermFilter,
  setCategoryFilter,
} from "../actions/searchResultsActions";

import logo from "../assets/images/site-logo/entirelogo.png";

import health from "../assets/images/homepage/health.png"
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
    console.log("clicked on", e.target.getAttribute("value"));
    this.props.setLoading(true);
    this.props.setCategoryFilter([ e.target.getAttribute("value") ]);
    browserHistory.push("/search");
  }

  render() {
    
    const categoryMap = {
      "Academics and Professional": academics,
      "Greek Life": greek,
      "Multicultural and Heritage": multicultural,
      "Community Service": community,
      "Sports and Fitness": sports,
      "Health and Well-being": health,
      "Performing and Creative Arts": arts,
      "Hobbies and Interests": hobbies,
      "Religious and Spiritual": religious,
      "Graduate Students": grad,
      "Politics": politics
    };
    
    const icons = [];
    for (let key in categoryMap) {
      icons.push((
        <div 
          className="home-cat-box"
          key={key}
          onClick={this.searchCategory}
          value={key}  
        >
          <div className="home-cat-aspect-ratio">
            <img className="home-cat-img" src={categoryMap[key]} value={key} />
          </div>
          <span className="home-cat-font" value={key}>{key}</span>
        </div>
      ));  
    }

    
    return (
      <div>
      <Header 
        showSearch={false}
      />
        <div
          className="text-xs-center home-initial-picture background-cover-center front-splash nopad-bottom"
        >

        <div 
          id="text-center"
          style={{ margin: "auto" }}>
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
            setLoading={this.props.setLoading}
            setTermFilter={this.props.setTermFilter}
          />
        </div>
      </div>
      <div 
        className="home-icons-content"
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
    setLoading,
    setTermFilter,
    setCategoryFilter,
  }, dispatch)
)(FrontPage);
