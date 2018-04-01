/* @flow */

import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { slide as Menu } from "react-burger-menu";

import HeaderSearchBar from "./HeaderSearchBar";

import {
  setLoading,
  setTermFilter,
} from "../actions/searchResultsActions";

import { unauthUser } from "../actions/authActions";

// need to add the following customizations:
// 1.  logged in
// 2.  static (fixed)
// 3.  font-color customization.
import logo from "../assets/images/site-logo/clubtree-stroke.png";


class Header extends Component {
  static PropTypes = {
    showSearch: PropTypes.boolean,
    type: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      profPicURL: ""
    };
  }

  componentDidMount() {
    this.setState({
      profPicURL: localStorage.getItem("profPicURL")
    });
  }
  
  toggleHeaderHamburger = () => {
    this.setState({
      headerHamburger: !this.state.headerHamburger
    });
  }

  generateLinkStyle = type => {
    switch (type) {
      case "signup":
        return "header-signup";
      case "safe":
        return "header-safe";
      default:
        return "header-main";
    }
  };

  optionalColor = () => {
    const thisPage = this.props.type;
    switch (this.props.type) {
      case "dashboard":
        return "header-dashboard";
      default:
        return "";
    }
  }

  render() {
    
    const web = (
      <div className={`header-float ${this.optionalColor()}`}>
        <Row style={{
          display: "flex",
          alignItems: "center"
        }}
        
        >
          <Col md={3}>
            <Link to="/">
              <img src={logo} width={"50%"} />
            </Link>
          </Col>
          <Col md={3}>
            <HeaderSearchBar
              show={this.props.showSearch}
              termFilter={this.props.termFilter}
              vibesFilter={this.props.vibesFilter}
              categoriesFilter={this.props.categoriesFilter}
              setLoading={this.props.setLoading}
              setTermFilter={this.props.setTermFilter}
            />
          </Col>
          <Col md={4}>
            <span className={this.generateLinkStyle(this.props.type)}>
              <Link className="header-btn-1" to="/about">ABOUT</Link>
              <Link className="header-btn-1" to="/events">EVENTS</Link>
              <Link className="header-btn-1" to="/feedback">FEEDBACK</Link>
              <Link className="header-btn-1" to="/faq">FAQ</Link>
            </span>
          </Col>
          <Col md={1}>
            <Link to="/dashboard">
              <img src={(this.props.authenticated) ? this.state.profPicURL : null} className="rounded-circle" />
            </Link>
          </Col>
        </Row>
      </div>
    );
    
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        top: "2%",
        left: "5%",
        width: "30px",
        height: "30px"
      },
      bmBurgerBars: {
        background: "rgba(0,0,0,0.5)"
      },
      bmCrossButton: {
        height: "50px",
        width: "50px"
      },
      bmCross: {
        background: '#bdc3c7',
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    };
    
    const mobile = (
      <div>
        <Menu 
          styles={styles}
        isOpen={this.state.headerHamburger}>
          <div className="mobile-header">
            <Row className="header-flex">
              <Col sm={10} md={10}><img src={logo} className="mobile-header-logo"/></Col>
            </Row>
            <div className="header-sticky-search">
              <HeaderSearchBar 
                show={this.props.showSearch}
                termFilter={this.props.termFilter}
                vibesFilter={this.props.vibesFilter}
                categoriesFilter={this.props.categoriesFilter}
                setLoading={this.props.setLoading}
                setTermFilter={this.props.setTermFilter}
              />
            </div>
              <Link className="header-btn-1" to="/about">ABOUT</Link>
            <br /><br />
              <Link className="header-btn-1" to="/events">EVENTS</Link>
            <br /><br />
              <Link className="header-btn-1" to="/feedback">FEEDBACK</Link>
            <br /><br />
              <Link className="header-btn-1" to="/faq">FAQ</Link>
          </div>
        </Menu>
        <div className="header-sticky header-flex">
          <div className="header-sticky-menu">
          </div>
          <div className="header-sticky-logo"><Link to="/"><img src={logo} width="50%"/></Link></div>
        </div>
      </div>
    );
    
    return (
      <div>
        <div className="hide-browser">
          {web}
        </div>
        
        <div className="hide-mobile">
          {mobile}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    termFilter: state.searchResultsReducer.termFilter,
    vibesFilter: state.searchResultsReducer.vibesFilter,
    categoriesFilter: state.searchResultsReducer.categoriesFilter,
    authenticated: state.authReducer.authenticated
  }),
  dispatch => bindActionCreators({
    setLoading,
    setTermFilter,
    unauthUser
  }, dispatch)
)(Header);
