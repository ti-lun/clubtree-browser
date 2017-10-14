/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { Dashboard } from "apps/main/containers/Dashboard";

describe("apps/main/containers/Dashboard", () => {
  it("renders without an issue", () => {
    const subject = <Dashboard />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
