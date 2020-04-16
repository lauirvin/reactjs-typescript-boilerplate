import { action } from 'typesafe-actions';

export const FETCH_DATAS = 'datas/FETCH_DATAS';
export const FETCH_DATAS_SUCCESS = 'datas/FETCH_DATAS_SUCCESS';
export const FETCH_DATAS_FAIL = 'datas/FETCH_DATAS_FAIL';

export const fetchDatas = () => action(FETCH_DATAS);
export const fetchDatasSuccess = (data: any) => action(FETCH_DATAS_SUCCESS, { data });
export const fetchDatasFail = (error: string) => action(FETCH_DATAS_FAIL, { error });
