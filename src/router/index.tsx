import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import ReduxSample from '../pages/ReduxSample/ReduxSample';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/redux-sample" component={ReduxSample} />
		</Switch>
	</Router>
);
