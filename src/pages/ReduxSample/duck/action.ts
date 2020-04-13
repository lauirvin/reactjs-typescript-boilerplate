import { action } from 'typesafe-actions';

export const SET_TEXT = 'settings/SET_TEXT';

export const setText = (text: string) => action(SET_TEXT, { text });
