import React from "react";
import { shallow } from "enzyme";

import HeaderSearchBar from "apps/main/components/HeaderSearchBar";

describe("apps/main/components/HeaderSearchBar", () => {
  it("renders without an issue", () => {
    const subject = <HeaderSearchBar />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
