/* @flow */

import reducer from "apps/main/reducers/searchResultsReducer";

describe("apps/main/reducers/searchResultsReducer", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer({}, {
        type: "_TEST_ACTION"
      })
    ).toEqual(state);
  });
});
