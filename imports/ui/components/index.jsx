import React, { PropTypes } from 'react';
import { Hello, GoodBye } from './hello.jsx';
import { NavBar } from './navbar.jsx';
import { RightBar } from './rightbar.jsx';
import { RenderArea } from './renderarea.jsx';
import { Link, browserHistory } from 'react-router';
import * as constants from '../../../common/constants.js';
import { store } from '../../startup/client/routes.jsx';

export const Index = () => <div>Enclosing
	<h3>Index</h3>
	<Hello what='wtf'/>
</div>;

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
export const SampleX = React.createClass({
    moveState() {
        // dispatch is in props so we don't need the store
        this.props.dispatch({type: 'TOGGLE'});
        //this.setState({target: constants.SignInPage});
    },
    render: function() {
        const {target} = this.props;
        return (
            <div>
                <NavBar target={target}/>

                <h3 onClick={this.moveState}>Move the state</h3>
                <GoodBye which={target}/>

                <h3 onClick={this.gotoPage}>Go to page</h3>
                <ul role="nav">
                    {/* declarative routing */}
                    <li><Link to="/index">index</Link></li>
                    <li><Link to="/hello">hello</Link></li>
                </ul>
                <div id='render' className='div3' style={{position: 'relative'}}>
                    <RenderArea target={target}/>
                </div>
                <RightBar target={target}/>
            </div>
        )
    }
});

SampleX.propTypes = {
    target: PropTypes.string.isRequired
};