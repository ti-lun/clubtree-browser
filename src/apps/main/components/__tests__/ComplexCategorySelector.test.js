import React from "react";
import { shallow } from "enzyme";

import ComplexCategorySelector from "apps/main/components/SearchResults/ComplexCategorySelector";

describe("apps/main/components/SearchResults/ComplexCategorySelector", () => {
  it("renders without an issue", () => {
    const subject = <ComplexCategorySelector />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
