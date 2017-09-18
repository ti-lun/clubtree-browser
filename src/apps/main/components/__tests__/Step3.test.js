import React from "react";
import { shallow } from "enzyme";

import Step3 from "apps/main/components/Step3";

describe("apps/main/components/Step3", () => {
  it("renders without an issue", () => {
    const subject = <Step3 />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
