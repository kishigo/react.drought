/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 kishigo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import React from 'react';
import * as constants from '../../../common/constants.js';
import {FlatButton} from 'material-ui';
import {cyan500, red500} from 'material-ui/styles/colors';

export const RightBar = React.createClass({
	rightBarStyle: {
		display: 'flex',
		border: '2px solid orange',
		order: '4',
		flex: '0',
		flexFlow: 'column',
		flexDirection: 'column',
		alignSelf: 'stretch',
		whiteSpace: 'nowrap',
        backgroundColor: red500
	},
    propTypes: {
        target: React.PropTypes.string,
		dispatch: React.PropTypes.func
    },
	/**
	 * onClick handler, dispatches ActionToggle to redux
	 */
	moveState() {
		console.log('moveState');
		// dispatch is in props so we don't need the store
		//this.props.dispatch({type: constants.ActionToggle});
		this.props.dispatch({type: constants.ActionToggle});
	},
	render() {
		console.log('RightBar: ENTRY, target: ' + this.props.target);
		let buttonStyle = {
			backgroundColor: 'transparent',
			color: 'white'
		};
		return (
			<div style={this.rightBarStyle}>
				<h2>RightBar: {this.props.target}</h2>
				<FlatButton label='button-1' style={buttonStyle} onClick={this.moveState}/>
				<FlatButton label='button-2' style={buttonStyle} onClick={this.moveState}/>
				<FlatButton label='button-3' style={buttonStyle} onClick={this.moveState}/>
				<FlatButton label='button-4' style={buttonStyle} onClick={this.moveState}/>
				<FlatButton label='button-5' style={buttonStyle} onClick={this.moveState}/>
			</div>
		);
	}
});