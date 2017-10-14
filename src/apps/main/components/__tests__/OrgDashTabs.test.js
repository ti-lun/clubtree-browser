import React from "react";
import { shallow } from "enzyme";

import OrgDashTabs from "apps/main/components/Dashboard/OrgDashTabs";

describe("apps/main/components/Dashboard/OrgDashTabs", () => {
  it("renders without an issue", () => {
    const subject = <OrgDashTabs />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
