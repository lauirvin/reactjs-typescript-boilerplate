import { ActionType } from 'typesafe-actions';
import * as SettingsActions from './action';

export interface State {
	text: string;
}

const initialState: State = {
	text: 'initial state',
};

type SettingsActions = ActionType<typeof SettingsActions>;

export default function reducer(state: State = initialState, action: SettingsActions): State {
	switch (action.type) {
		case SettingsActions.SET_TEXT:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}
