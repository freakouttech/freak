import {
  GET_USER,
  SET_USER,
  IUserAction,
  IUserState,
} from "../definitions/users";

import { usersInitialState } from "../actions/usersActions";

export function usersReducer(
  state: IUserState = usersInitialState,
  action: IUserAction,
): IUserState {
  switch (action.type) {
    case GET_USER: {
      return action.payload;
    }
    default:
      return state;
  }
}
