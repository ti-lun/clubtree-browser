/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { ClubProfile } from "apps/main/containers/ClubProfile";

describe("apps/main/containers/ClubProfile", () => {
  it("renders without an issue", () => {
    const subject = <ClubProfile />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
