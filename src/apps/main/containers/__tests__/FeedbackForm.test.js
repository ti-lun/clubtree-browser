/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { FeedbackForm } from "apps/main/containers/FeedbackForm";

describe("apps/main/containers/FeedbackForm", () => {
  it("renders without an issue", () => {
    const subject = <FeedbackForm />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
