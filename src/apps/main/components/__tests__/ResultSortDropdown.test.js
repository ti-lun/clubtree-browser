import React from "react";
import { shallow } from "enzyme";

import ResultSortDropdown from "apps/main/components/SearchResults/ResultSortDropdown";

describe("apps/main/components/SearchResults/ResultSortDropdown", () => {
  it("renders without an issue", () => {
    const subject = <ResultSortDropdown />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
