import React from "react";
import { shallow } from "enzyme";

import ProfileHeader from "apps/main/components/ProfileHeader";

describe("apps/main/components/ProfileHeader", () => {
  it("renders without an issue", () => {
    const subject = <ProfileHeader />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
