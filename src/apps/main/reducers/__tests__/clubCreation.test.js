/* @flow */

import reducer from "appsmain\reducersclubCreation";

describe("appsmain\reducersclubCreation", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer(
        {},
        {
          type: "_TEST_ACTION"
        }
      )
    ).toEqual(state);
  });
});
