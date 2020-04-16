import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import ReduxSample from '../pages/ReduxSample/ReduxSample';
import ReduxAPISample from '../pages/ReduxAPISample/ReduxAPISample';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/redux-sample" component={ReduxSample} />
			<Route exact path="/redux-sample-api" component={ReduxAPISample} />
		</Switch>
	</Router>
);
