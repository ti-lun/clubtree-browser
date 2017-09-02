import React from "react";
import { shallow } from "enzyme";

import CategorySelector from "apps/main/components/CategorySelector";

describe("apps/main/components/CategorySelector", () => {
  it("renders without an issue", () => {
    const subject = <CategorySelector />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
