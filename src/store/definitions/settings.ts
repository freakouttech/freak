export const GET_SETTINGS = "GET_SETTINGS";
export type GET_SETTINGS = typeof GET_SETTINGS;

export interface ISettingState {
  autoReminder: boolean;
}

export interface ISettingAction {
  type: GET_SETTINGS;
  payload: ISettingState;
}
