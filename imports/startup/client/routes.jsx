import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Index, Sample } from '../../ui/components/index.jsx';
import { Hello } from '../../ui/components/hello.jsx';

Meteor.startup( () => {
	render(
		<Router history={ browserHistory }>
			<Route path="/" component={ Sample } />
            <Route path="/hello" component={ Hello } />
            <Route path="/index" component={ Index } />
		</Router>,
		document.getElementById( 'react-root' )
	);
});