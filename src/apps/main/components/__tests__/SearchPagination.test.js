import React from "react";
import { shallow } from "enzyme";

import SearchPagination from "apps/main/components/SearchResults/SearchPagination";

describe("apps/main/components/SearchResults/SearchPagination", () => {
  it("renders without an issue", () => {
    const subject = <SearchPagination />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
