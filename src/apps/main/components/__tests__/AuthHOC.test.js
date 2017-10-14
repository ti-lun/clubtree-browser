import React from "react";
import { shallow } from "enzyme";

import AuthHOC from "apps/main/components/AuthHOC";

describe("apps/main/components/AuthHOC", () => {
  it("renders without an issue", () => {
    const subject = <AuthHOC />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
