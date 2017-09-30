import React from "react";
import { shallow } from "enzyme";

import TimeSelector from "apps/main/components/TimeSelector";

describe("apps/main/components/TimeSelector", () => {
  it("renders without an issue", () => {
    const subject = <TimeSelector />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
