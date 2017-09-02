import React from "react";
import { shallow } from "enzyme";

import App from "apps/main/components/App";

describe("apps/main/components/App", () => {
  it("renders without an issue", () => {
    const subject = <App />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
