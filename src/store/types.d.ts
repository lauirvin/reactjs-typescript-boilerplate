declare module 'MyTypes' {
	import { StateType } from 'typesafe-actions';

	export type Store = StateType<typeof import('./index').default>;
	// export type RootAction = ActionType<typeof import('./actions').default>;
	export type RootState = StateType<typeof import('./reducer').default>;
}
