import React from "react";
import { shallow } from "enzyme";

import TimeSelectorUnit from "apps/main/components/TimeSelectorUnit";

describe("apps/main/components/TimeSelectorUnit", () => {
  it("renders without an issue", () => {
    const subject = <TimeSelectorUnit />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
