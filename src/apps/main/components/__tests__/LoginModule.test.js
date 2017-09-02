import React from "react";
import { shallow } from "enzyme";

import LoginModule from "apps/main/components/LoginModule";

describe("apps/main/components/LoginModule", () => {
  it("renders without an issue", () => {
    const subject = <LoginModule />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
