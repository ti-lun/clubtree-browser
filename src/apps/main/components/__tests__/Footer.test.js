import React from "react";
import { shallow } from "enzyme";

import Footer from "apps/main/components/Footer";

describe("apps/main/components/Footer", () => {
  it("renders without an issue", () => {
    const subject = <Footer />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
