export const GET_USER = "GET_USER";
export type GET_USER = typeof GET_USER;
export const SET_USER = "SET_USER";
export type SET_USER = typeof SET_USER;
export interface IUserState {
  username: String,
  email: String,
  password: String,
}

export interface IUserAction {
  type: GET_USER;
  payload: IUserState;
}
