import {
  GET_SETTINGS,
  ISettingAction,
  ISettingState,
} from "../definitions/settings";

import { settingsInitialState } from "../actions/settingsActions";

export function settingsReducer(
  state: ISettingState = settingsInitialState,
  action: ISettingAction,
): ISettingState {
  switch (action.type) {
    case GET_SETTINGS: {
      return action.payload;
    }
    default:
      return state;
  }
}
