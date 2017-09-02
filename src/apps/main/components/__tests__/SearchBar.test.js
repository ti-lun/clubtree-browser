import React from "react";
import { shallow } from "enzyme";

import SearchBar from "apps/main/components/SearchBar";

describe("apps/main/components/SearchBar", () => {
  it("renders without an issue", () => {
    const subject = <SearchBar />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
