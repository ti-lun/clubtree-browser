import React from "react";
import { shallow } from "enzyme";

import FiltersModule from "apps/main/components/SearchResults/FiltersModule";

describe("apps/main/components/SearchResults/FiltersModule", () => {
  it("renders without an issue", () => {
    const subject = <FiltersModule />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
