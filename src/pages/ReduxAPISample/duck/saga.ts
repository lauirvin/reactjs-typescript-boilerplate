import { put, takeLatest, call } from 'redux-saga/effects';
import * as DatasActions from './action';
import { fetchDatas } from '../../../api';

export function* handleFetchDatas() {
	try {
		const datas = yield call(fetchDatas);
		yield put(DatasActions.fetchDatasSuccess(datas));
	} catch (error) {
		yield put(DatasActions.fetchDatasFail(error.message));
	}
}

export function* watchFetchDatas() {
	yield takeLatest(DatasActions.FETCH_DATAS, handleFetchDatas);
}
