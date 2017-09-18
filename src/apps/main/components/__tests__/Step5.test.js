import React from "react";
import { shallow } from "enzyme";

import Step5 from "apps/main/components/Step5";

describe("apps/main/components/Step5", () => {
  it("renders without an issue", () => {
    const subject = <Step5 />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
