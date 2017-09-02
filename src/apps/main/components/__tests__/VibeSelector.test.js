import React from "react";
import { shallow } from "enzyme";

import VibeSelector from "apps/main/components/VibeSelector";

describe("apps/main/components/VibeSelector", () => {
  it("renders without an issue", () => {
    const subject = <VibeSelector />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
