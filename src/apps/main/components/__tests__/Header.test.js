import React from "react";
import { shallow } from "enzyme";

import Header from "apps/main/components/Header";

describe("apps/main/components/Header", () => {
  it("renders without an issue", () => {
    const subject = <Header type="main" />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
