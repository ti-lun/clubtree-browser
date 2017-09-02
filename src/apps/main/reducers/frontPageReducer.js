/* @flow */
import axios from "axios";

type State = {
  searchResults: Array
};

const INITIAL_STATE: State = {
  searchResults: []
};

export default (
  state: State = INITIAL_STATE,
  action: { type: string, payload?: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
