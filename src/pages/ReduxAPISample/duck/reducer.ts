import { ActionType } from 'typesafe-actions';
import * as DatasActions from './action';

export interface State {
	data: any;
	error?: string;
}

const initialState: State = {
	data: null,
};

type DatasActions = ActionType<typeof DatasActions>;

export default function reducer(state: State = initialState, action: DatasActions): State {
	switch (action.type) {
		case DatasActions.FETCH_DATAS:
			return {
				...state,
				data: null,
			};
		case DatasActions.FETCH_DATAS_SUCCESS:
		case DatasActions.FETCH_DATAS_FAIL:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}
