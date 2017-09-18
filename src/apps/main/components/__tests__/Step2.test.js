import React from "react";
import { shallow } from "enzyme";

import Step2 from "apps/main/components/Step2";

describe("apps/main/components/Step2", () => {
  it("renders without an issue", () => {
    const subject = <Step2 />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
