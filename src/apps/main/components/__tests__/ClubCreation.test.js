import React from "react";
import { shallow } from "enzyme";

import ClubCreation from "apps/main/components/ClubProfile/ClubCreation";

describe("src/apps/main/components/ClubProfile/ClubCreation/", () => {
  it("renders without an issue", () => {
    const subject = <ClubCreation />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
