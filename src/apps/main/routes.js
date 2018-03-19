/* @flow */

import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "compiled/gluestick";

import AuthHOC from "./components/AuthHOC";

import MasterLayout from "./components/MasterLayout";
import HomeApp from "./containers/HomeApp";
import NoMatchApp from "./containers/NoMatchApp";
import SearchResults from "./containers/SearchResults";
import FrontPage from "./containers/FrontPage";
import ClubProfile from "./containers/ClubProfile";
import ClubCreation from "./containers/ClubCreation";
import FeedbackForm from "./containers/FeedbackForm";
import AdvancedSearch from "./containers/AdvancedSearch";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/Dashboard";
import About from "./components/About";
import FAQ from "./containers/FAQ";
import PrivacyStuff from "./containers/PrivacyStuff";
import Events from "./containers/Events";


export default function routes(/*store: Object, httpClient: Object*/) {
  return (
    <Router component={HomeApp} history={browserHistory}>
      <Route path="/" component={FrontPage} />
      <Route path="/about" component={About} />
      <Route path="/advancedsearch" component={AdvancedSearch} />
      <Route path="/club(/:id)" component={ClubProfile} />
      <Route path="/clubcreation(/:id)" component={ClubCreation} />
      <Route path="/events" component={Events} />
      <Route path="/faq" component={FAQ} />
      <Route path="/feedback" component={FeedbackForm} />
      <Route path="/search" component={SearchResults} />
      <Route path="/privacy" component={PrivacyStuff} />
      <Route path="/joinus" component={SignUp} />
      <Route path="/dashboard" component={AuthHOC(Dashboard)} />
      <Route path="/404" component={NoMatchApp} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Router>
  );
}
