import React from "react";
import { shallow } from "enzyme";

import ClubResultList from "apps/main/components/SearchResults/ClubResultList";

describe("apps/main/components/SearchResults/ClubResultList", () => {
  it("renders without an issue", () => {
    const subject = <ClubResultList />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
