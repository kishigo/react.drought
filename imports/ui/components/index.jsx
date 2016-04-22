import React from 'react';
import { Hello, GoodBye } from './hello.jsx';


export const Index = () => <div>Enclosing
	<h3>Index</h3>
	<Hello what='wtf'/>
	<GoodBye which={this.props.which} />
	</div>;

export const Sample = React.createClass({
	getInitialState() {
		return { target: 'wtf' };
	},
	moveState() {
		this.setState({target: 'omg'});
	},
	render: function() {
		return (
			<div>
				<h3 onClick={this.moveState}>Move the state</h3>
			<GoodBye which={this.state.target} />
			</div>	
		);
	}
});