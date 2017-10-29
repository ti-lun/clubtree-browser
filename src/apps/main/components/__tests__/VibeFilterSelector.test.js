import React from "react";
import { shallow } from "enzyme";

import VibeFilterSelector from "apps\main\components\VibeFilterSelector";

describe("apps\main\components\VibeFilterSelector", () => {
  it("renders without an issue", () => {
    const subject = <VibeFilterSelector />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
