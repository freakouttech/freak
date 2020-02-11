import {
  GET_USER,
  SET_USER,
  IUserState
} from "../definitions/users";

export const usersInitialState: IUserState = {
  username: "",
  email: "",
  password: "",
};

export function getUser(dispatch: any, users: IUserState): void {
  console.log(123);
  dispatch({
    payload: users,
    type: GET_USER,
  });
}

export function putUser(dispatch: any, users: IUserState): void {
  dispatch({
    payload: users,
    type: SET_USER,
  });
}
