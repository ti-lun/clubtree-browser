import React from "react";
import { shallow } from "enzyme";

import About from "apps/main/components/About";

describe("apps/main/components/About", () => {
  it("renders without an issue", () => {
    const subject = <About />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
