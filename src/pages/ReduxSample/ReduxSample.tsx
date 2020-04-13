import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';
import * as Actions from './duck/action';
import { selectText } from './duck/selector';

interface Props {
	setText: (text: string) => void;
	text: string;
}

const ReduxSample = ({ setText, text }: Props) => {
	const [input, setInput] = useState('');

	const handleInputChange = (e: any) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		setText(input);
	};

	return (
		<div>
			<h1>Redux Sample</h1>
			<p>
				Current State:
				{text}
			</p>
			<input onChange={handleInputChange} type="text" />
			<button type="button" onClick={handleClick}>
				Update Redux State
			</button>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	text: selectText(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setText: (text: string) => dispatch(Actions.setText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSample);
