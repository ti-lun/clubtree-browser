/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { SignUp } from "apps/main/containers/SignUp";

describe("apps/main/containers/SignUp", () => {
  it("renders without an issue", () => {
    const subject = <SignUp />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
