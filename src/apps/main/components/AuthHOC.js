/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";

export default function AuthHOC(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push("/");
      }
    }

    render() {
      return <ComposedComponent {... this.props} />
    }
  }

  return connect(
    (state) => ({
      authenticated: state.authReducer.authenticated
    }),
    null
  )(Authentication);

}
