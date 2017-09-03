import React from "react";
import { shallow } from "enzyme";

import ClubCreationHeader from "apps/main/components/ClubCreation/ClubCreationHeader";

describe("apps/main/components/ClubCreation/ClubCreationHeader", () => {
  it("renders without an issue", () => {
    const subject = <ClubCreationHeader />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
