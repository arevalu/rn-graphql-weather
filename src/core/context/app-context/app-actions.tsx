import { ISwitchSelectorOption } from '@components/switch/types';

export type AppAction =
  | { type: 'HANDLE_THEME'; payload: string | number | ISwitchSelectorOption }
  | { type: 'ADD_CITY'; payload: { cityId: string } }
  | { type: 'UPDATE_CITIES'; payload: string[] }
  | { type: 'ADD_FAVORITE'; payload: { cityId: string } }
  | { type: 'UPDATE_FAVORITES'; payload: string[] }
  | {
      type: 'TOGGLE_TEMP_UNIT';
      payload: string | number | ISwitchSelectorOption;
    };
