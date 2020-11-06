import { action } from 'typesafe-actions';

interface ActionType {
	type: 'settings/SET_TEXT';
	payload: { text: string; };
}

export const SET_TEXT = 'settings/SET_TEXT';

export const setText = (text: string): ActionType => action(SET_TEXT, { text });
