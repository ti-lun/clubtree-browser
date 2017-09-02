import React from "react";
import { shallow } from "enzyme";

import FrontPage from "apps/main/components/FrontPage";

describe("apps/main/components/FrontPage", () => {
  it("renders without an issue", () => {
    const subject = <FrontPage />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
