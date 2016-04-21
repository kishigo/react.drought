import React from 'react';

//export const Hello = () => <h3>Hello</h3>;

export const Hello = function Hello (what) {
	return ( <div className="commentBox">
		Hello, World! I am a CommentBox.
			<h2>OMG!</h2>
	</div>
	);
};

var what = 'omg';

export const GoodBye = function GoodBye (which) {
	console.log('which: ' + which.which);
	switch (what) {
	case 'wtf':
		return ( <h2>wtf</h2>);
		break;
	case 'omg':
		return ( <h2>omg</h2>);
		break;
	default:
		return ( <h2>undef</h2>);
	}
};