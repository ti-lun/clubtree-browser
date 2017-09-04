/* @flow */

import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "compiled/gluestick";

import MasterLayout from "./components/MasterLayout";
import HomeApp from "./containers/HomeApp";
import NoMatchApp from "./containers/NoMatchApp";
import SearchResults from "./containers/SearchResults";
import FrontPage from "./components/FrontPage";
import ClubProfile from "./containers/ClubProfile";
import ClubCreation from "./containers/ClubCreation";
import AdvancedSearch from "./containers/AdvancedSearch";
import SignUp from "./containers/SignUp";

export default function routes(/*store: Object, httpClient: Object*/) {
  return (
    <Router component={HomeApp} history={browserHistory}>
      <Route path="/" component={FrontPage} />
      <Route path="/advancedsearch" component={AdvancedSearch} />
      <Route path="/club/:id" component={ClubProfile} />
      <Route path="/clubcreation" component={ClubCreation} />
      <Route path="/search" component={SearchResults} />
      <Route path="/joinus" component={SignUp} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Router>
  );
}
