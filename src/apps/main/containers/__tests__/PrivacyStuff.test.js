/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { PrivacyStuff } from "apps/main/containers/PrivacyStuff";

describe("apps/main/containers/PrivacyStuff", () => {
  it("renders without an issue", () => {
    const subject = <PrivacyStuff />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
