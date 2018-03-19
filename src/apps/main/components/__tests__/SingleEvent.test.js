import React from "react";
import { shallow } from "enzyme";

import SingleEvent from "apps/main/components/Events/SingleEvent";

describe("apps/main/components/Events/SingleEvent", () => {
  it("renders without an issue", () => {
    const subject = <SingleEvent />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
