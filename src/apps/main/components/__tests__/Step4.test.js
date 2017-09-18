import React from "react";
import { shallow } from "enzyme";

import Step4 from "apps/main/components/Step4";

describe("apps/main/components/Step4", () => {
  it("renders without an issue", () => {
    const subject = <Step4 />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
