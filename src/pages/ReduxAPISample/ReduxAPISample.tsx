import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';
import * as Actions from './duck/action';
import { selectDatasData } from './duck/selector';

interface Props {
	fetchDatas: () => void;
	datas: unknown | null;
}

const ReduxAPISample = ({ datas, fetchDatas }: Props) => {
	useEffect(() => {
		fetchDatas();
		window.scrollTo(0, 0);
	}, [fetchDatas]);

	if (!datas) {
		return null;
	}

	return (
		<div>
			<h1>Redux API Sample</h1>
			<p>
				{`Fetched Data from state: ${datas}`}
			</p>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	datas: selectDatasData(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	fetchDatas: () => dispatch(Actions.fetchDatas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAPISample);
