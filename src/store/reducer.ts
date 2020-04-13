import { combineReducers } from 'redux';
import { TextReducer } from '../pages/ReduxSample';

export default combineReducers({
	text: TextReducer,
});
