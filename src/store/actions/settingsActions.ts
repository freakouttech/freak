import { GET_SETTINGS, ISettingState } from "../definitions/settings";

export const settingsInitialState: ISettingState = {
  autoReminder: true,
};

export function getSettings(dispatch: any, settings: ISettingState): void {
  dispatch({
    payload: settings,
    type: GET_SETTINGS,
  });
}
