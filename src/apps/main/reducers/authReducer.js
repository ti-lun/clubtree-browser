import {
  SIGNIN_FB,
  AUTH_USER,
  UNAUTH_USER
} from "../actions/authActions";

type State = {
  authenticated: Boolean
};

const INITIAL_STATE: State = {
  authenticated: false
};

export default (
  state: State = INITIAL_STATE,
  action: { type: string, category: string }
) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    default:
      return state;
  }
}
