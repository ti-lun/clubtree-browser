/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { Events } from "apps/main/containers/Events";

describe("apps/main/containers/Events", () => {
  it("renders without an issue", () => {
    const subject = <Events />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
