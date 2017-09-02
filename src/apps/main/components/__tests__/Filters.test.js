import React from "react";
import { shallow } from "enzyme";

import Filters from "apps/main/components/SearchResults/CategoriesCheckbox";

describe("apps/main/components/SearchResults/CategoriesCheckbox", () => {
  it("renders without an issue", () => {
    const subject = <CategoriesCheckbox />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
