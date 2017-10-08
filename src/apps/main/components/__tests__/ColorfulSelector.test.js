import React from "react";
import { shallow } from "enzyme";

import ColorfulSelector from "apps/main/components/ColorfulSelector";

describe("apps/main/components/ColorfulSelector", () => {
  it("renders without an issue", () => {
    const subject = <ColorfulSelector />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
