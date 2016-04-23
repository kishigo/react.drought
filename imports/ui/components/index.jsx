import React from 'react';
import { Hello, GoodBye } from './hello.jsx';
import { Link, browserHistory } from 'react-router';

export const Index = () => <div>Enclosing
	<h3>Index</h3>
	<Hello what='wtf'/>
	</div>;

export const Sample = React.createClass({
	getInitialState() {
		return { target: 'wtf' };
	},
	moveState() {
		this.setState({target: 'omg'});
	},
    /**
     * Programmatic routing
     */
    gotoPage() {
        console.log('gotoPage()');
        browserHistory.push('/index');
    },
	render: function() {
        console.log('Sample: render');
		return (
			<div>
				<h3 onClick={this.moveState}>Move the state</h3>
			<GoodBye which={this.state.target} />
                <h3 onClick={this.gotoPage}>Go to page</h3>
                <ul role="nav">
                    {/* declarative routing */}
                    <li><Link to="/index">index</Link></li>
                    <li><Link to="/hello">hello</Link></li>
                    </ul>
			</div>	
		);
	}
});