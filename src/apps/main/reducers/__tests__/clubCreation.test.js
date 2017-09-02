/* @flow */

import reducer from "apps\main\reducers\clubCreation";

describe("apps\main\reducers\clubCreation", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer({}, {
        type: "_TEST_ACTION"
      })
    ).toEqual(state);
  });
});
