import React, { PropTypes } from 'react';
import { Hello, GoodBye } from './hello.jsx';
import { NavBar } from './navbar.jsx';
import { WrappedNavBar } from '../../startup/client/routes.jsx';
import { RightBar } from './rightbar.jsx';
import { RenderArea } from './renderarea.jsx';
import { Link, browserHistory } from 'react-router';
import * as constants from '../../../common/constants.js';
import { store } from '../../startup/client/routes.jsx';
import {AppBar} from 'material-ui'

/**
 * deprecated
 * @constructor
 */
export const Index = () => <div>Enclosing
	<h3>Index</h3>
	<Hello what='wtf'/>
</div>;

/**
 * Deprecated
 */
export const Sample = React.createClass({
	getInitialState() {
		return {target: constants.HomePage};
	},
	moveState() {
		this.setState({target: constants.SignInPage});
	},
	/**
	 * Programmatic routing
	 */
		gotoPage() {
		console.log('gotoPage()');
		browserHistory.push('/index');
	},
	render: function () {
		console.log('Sample: render');
		return (
			<div>
				<NavBar target={this.state.target}/>

				<h3 onClick={this.moveState}>Move the state</h3>
				<GoodBye which={this.state.target}/>

				<h3 onClick={this.gotoPage}>Go to page</h3>
				<ul role="nav">
					{/* declarative routing */}
					<li><Link to="/index">index</Link></li>
					<li><Link to="/hello">hello</Link></li>
				</ul>
				<div id='render' className='div3' style={{position: 'relative'}}>
					<RenderArea target={this.state.target}/>
				</div>
				<RightBar target={this.state.target}/>
			</div>
		);
	}
});

const toggleTarget = () => {
	return ({
		target: constants.SignInPage
	})
};
/**
 * AppFrame creates a flexbox container with two items, NavBar and RenderArea
 */
export const AppFrame = React.createClass({
	/**
	 * Inline style for top level container
	 */
	appFrameStyle: {
		/* main container goes column-wise */
		border: '1px solid pink',
		display: 'flex',
		flexDirection: 'column',
		height: '100%'

	},
	propTypes: {
		target: React.PropTypes.string,
		dispatch: React.PropTypes.func
	},
	render: function () {
		const {target} = this.props;
		const {dispatch} = this.props;
		return (
			<div style={this.appFrameStyle}>
				<WrappedNavBar/>
				<RenderArea target={target} dispatch={dispatch}/>
			</div>
		)
	}
});

/**
 * react proptypes
 * @type {{target: *}}
 */
AppFrame.propTypes = {
	target: PropTypes.string.isRequired
};