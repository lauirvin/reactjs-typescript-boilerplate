import { createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { DatasSaga } from '../pages/ReduxAPISample';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
	yield all([
		DatasSaga(),
	]);
}
sagaMiddleware.run(rootSaga);

export default store;
