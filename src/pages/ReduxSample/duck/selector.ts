import { createSelector } from 'reselect';
import { RootState } from 'MyTypes';

export const selectTextData = (state: RootState) => state.text;

export const selectText = createSelector(
	selectTextData,
	(data) => data.text,
);
