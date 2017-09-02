/* @flow */
import _ from "lodash";
import { ADD_CLUB_CATEGORY } from "../actions/index";


type State = {
  newClub: {
    category: array
  }
}

const INITIAL_STATE: State = {
  newClub: {
    category: []
  }
};

export default (state: State = INITIAL_STATE, action: { type: string, category: string }) => {
  switch (action.type) {
    case ADD_CLUB_CATEGORY:
      if (_.includes(state.newClub.category, action.category)) {
        console.log('removing: ' + action.category);
        state = {
          ...state,
          newClub: {
            ...state.newClub,
            category: _.without(state.newClub.category, action.category)
          }
        };
      } else {
        console.log('adding: ' + action.category);
        state = {
          ...state,
          newClub: {
            ...state.newClub,
            category: _.concat(state.newClub.category, action.category)
          }
        }
      }
      return state;
    default:
      return state;
  }
};
