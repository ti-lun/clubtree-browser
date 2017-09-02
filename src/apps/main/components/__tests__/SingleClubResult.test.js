import React from "react";
import { shallow } from "enzyme";

import SingleClubResult from "apps/main/components/SearchResults/SingleClubResult";

describe("apps/main/components/SearchResults/SingleClubResult", () => {
  it("renders without an issue", () => {
    const subject = <SingleClubResult />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
