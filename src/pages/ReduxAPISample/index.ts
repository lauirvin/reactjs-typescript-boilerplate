import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import DatasReducer from './duck/reducer';
import ReduxAPISample from './ReduxAPISample';
import { watchFetchDatas } from './duck/saga';

function* DatasSaga():
Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
	yield all([
		watchFetchDatas(),
	]);
}

export {
	DatasSaga,
	DatasReducer,
	ReduxAPISample,
};
