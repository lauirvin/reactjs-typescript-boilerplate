import { action } from 'typesafe-actions';

interface ActionType {
	type: 'datas/FETCH_DATAS' | 'datas/FETCH_DATAS_SUCCESS' | 'datas/FETCH_DATAS_FAIL';
	payload?: {
		data?: unknown;
		error?: string;
	};
}

export const FETCH_DATAS = 'datas/FETCH_DATAS';
export const FETCH_DATAS_SUCCESS = 'datas/FETCH_DATAS_SUCCESS';
export const FETCH_DATAS_FAIL = 'datas/FETCH_DATAS_FAIL';

export const fetchDatas = (): ActionType => action(FETCH_DATAS);
export const fetchDatasSuccess = (data: unknown):
ActionType => action(FETCH_DATAS_SUCCESS, { data });

export const fetchDatasFail = (error: string):
ActionType => action(FETCH_DATAS_FAIL, { error });
