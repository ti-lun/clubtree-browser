import React from "react";
import { shallow } from "enzyme";

import NoClubsDashboard from "apps/main/components/Dashboard/NoClubsDashboard";

describe("apps/main/components/Dashboard/NoClubsDashboard", () => {
  it("renders without an issue", () => {
    const subject = <NoClubsDashboard />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
