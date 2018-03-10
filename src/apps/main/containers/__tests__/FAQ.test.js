/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { FAQ } from "apps/main/containers/FAQ";

describe("apps/main/containers/FAQ", () => {
  it("renders without an issue", () => {
    const subject = <FAQ />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
