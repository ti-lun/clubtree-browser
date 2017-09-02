import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FrontPage from "./components/FrontPage";
import AdvancedSearch from "./containers/AdvancedSearch";
import ClubProfile from "./components/ClubProfile";
import ClubCreation from "./containers/ClubCreation";

import "./style/style.css";
import "./style/loggedInstyle.css";
import "./style/joinus.css";
import "./nodemodules/bootstrap/dist/css/bootstrap.css";
import "./nodemodules/bootstrap/dist/css/bootstrap-theme.css";

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={FrontPage} />
          <Route path="/advancedsearch" component={AdvancedSearch} />
          <Route path="/club/:id" component={ClubProfile} />
          <Route path="/clubcreation/:page" component={ClubCreation} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
