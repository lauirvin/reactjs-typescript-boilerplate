import { all } from 'redux-saga/effects';
import DatasReducer from './duck/reducer';
import ReduxAPISample from './ReduxAPISample';
import { watchFetchDatas } from './duck/saga';

function* DatasSaga() {
	yield all([
		watchFetchDatas(),
	]);
}

export {
	DatasSaga,
	DatasReducer,
	ReduxAPISample,
};
