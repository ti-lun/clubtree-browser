import React from "react";
import { shallow } from "enzyme";

import OrgDashboard from "apps/main/components/Dashboard/OrgDashboard";

describe("apps/main/components/Dashboard/OrgDashboard", () => {
  it("renders without an issue", () => {
    const subject = <OrgDashboard />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
