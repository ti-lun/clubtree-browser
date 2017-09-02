/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { SearchResults } from "apps/main/containers/SearchResults";

describe("apps/main/containers/SearchResults", () => {
  it("renders without an issue", () => {
    const subject = <SearchResults />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
