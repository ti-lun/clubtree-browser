import React from "react";
import { shallow } from "enzyme";

import QuestionUnit from "apps/main/components/QuestionUnit";

describe("apps/main/components/QuestionUnit", () => {
  it("renders without an issue", () => {
    const subject = <QuestionUnit />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
