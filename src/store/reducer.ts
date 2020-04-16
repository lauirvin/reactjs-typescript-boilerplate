import { combineReducers } from 'redux';
import { TextReducer } from '../pages/ReduxSample';
import { DatasReducer } from '../pages/ReduxAPISample';

export default combineReducers({
	text: TextReducer,
	datas: DatasReducer,
});
