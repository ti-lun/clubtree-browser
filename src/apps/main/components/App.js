/* @flow */

//remember to import all other components/containers you use in the application
import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import FrontPage from "./FrontPage.js";
import Header from "./Header";
import { Container } from "reactstrap";

export default class App extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#d6d6d6";
  }

  render() {
    return (
      <Container style={{ "background-color": "#d6d6d6" }}>
        <Header type="main"/>
        <FrontPage />
      </Container>
    );
  }
}
