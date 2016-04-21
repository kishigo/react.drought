import React from 'react';
import { Hello, GoodBye } from './hello.jsx';


export const Index = () => <div>Enclosing
	<h3>Index</h3>
	<Hello what='wtf'/>
	<GoodBye which={this.props.which} />
	</div>;

export const Sample = React.createClass({
	render: function() {
		return (
			<div>
			<GoodBye which={this.props.which} />
			</div>	
		);
	}
});