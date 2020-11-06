import { createSelector } from 'reselect';
import { RootState } from 'MyTypes';
import { State } from './reducer';

export const selectTextData = (state: RootState): State => state.text;

export const selectText = createSelector(
	selectTextData,
	(data) => data.text,
);
