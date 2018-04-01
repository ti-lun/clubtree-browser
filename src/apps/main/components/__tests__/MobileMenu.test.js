import React from "react";
import { shallow } from "enzyme";

import MobileMenu from "apps/main/components/MobileMenu";

describe("apps/main/components/MobileMenu", () => {
  it("renders without an issue", () => {
    const subject = <MobileMenu />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
