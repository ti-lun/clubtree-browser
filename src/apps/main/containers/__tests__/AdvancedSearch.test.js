/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { AdvancedSearch } from "apps/main/containers/AdvancedSearch";

describe("apps/main/containers/AdvancedSearch", () => {
  it("renders without an issue", () => {
    const subject = <AdvancedSearch />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
