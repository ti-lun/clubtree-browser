import React from "react";
import { shallow } from "enzyme";

import Step1 from "apps/main/components/ClubCreation/Step1";

describe("apps/main/components/ClubCreation/Step1", () => {
  it("renders without an issue", () => {
    const subject = <Step1 />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
