/* @flow */

import reducer from "apps/main/reducers/frontPageReducer";

describe("apps/main/reducers/frontPageReducer", () => {
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
