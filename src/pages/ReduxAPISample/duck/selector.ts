import { createSelector } from 'reselect';
import { RootState } from 'MyTypes';

export const selectDatas = (state: RootState) => state.datas;

export const selectDatasData = createSelector(
	selectDatas,
	(datas) => datas.data,
);
