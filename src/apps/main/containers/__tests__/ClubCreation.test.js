/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { ClubCreation } from "apps/main/containers/ClubCreation";

describe("apps/main/containers/ClubCreation", () => {
  it("renders without an issue", () => {
    const subject = <ClubCreation />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
