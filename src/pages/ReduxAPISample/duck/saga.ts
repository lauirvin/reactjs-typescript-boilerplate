import {
	put, takeLatest, call, ForkEffect, CallEffect, PutEffect,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Action } from 'typesafe-actions';
import * as DatasActions from './action';
import { fetchDatas } from '../../../api';

export function* handleFetchDatas():
Generator<CallEffect<AxiosResponse> | PutEffect<Action<string>>, void, unknown> {
	try {
		const datas = yield call(fetchDatas);
		yield put(DatasActions.fetchDatasSuccess(datas));
	} catch (error) {
		yield put(DatasActions.fetchDatasFail(error.message));
	}
}

export function* watchFetchDatas():
Generator<ForkEffect<never>, void, unknown> {
	yield takeLatest(DatasActions.FETCH_DATAS, handleFetchDatas);
}
