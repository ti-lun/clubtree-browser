import React from "react";
import { shallow } from "enzyme";

import DisplayClubResults from "apps/main/components/SearchResults/DisplayClubResults";

describe("apps/main/components/SearchResults/DisplayClubResults", () => {
  it("renders without an issue", () => {
    const subject = <DisplayClubResults />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
