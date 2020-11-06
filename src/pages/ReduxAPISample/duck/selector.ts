import { createSelector } from 'reselect';
import { RootState } from 'MyTypes';
import { State } from './reducer';

export const selectDatas = (state: RootState): State => state.datas;

export const selectDatasData = createSelector(
	selectDatas,
	(datas) => datas.data,
);
