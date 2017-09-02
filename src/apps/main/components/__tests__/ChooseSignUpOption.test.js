import React from "react";
import { shallow } from "enzyme";

import ChooseSignUpOption from "apps/main/components/SignUp/ChooseSignUpOption";

describe("apps/main/components/SignUp/ChooseSignUpOption", () => {
  it("renders without an issue", () => {
    const subject = <ChooseSignUpOption />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
