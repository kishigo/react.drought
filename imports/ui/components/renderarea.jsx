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
import { RightBar } from './rightbar.jsx';
import * as constants from '../../../common/constants.js';

export const RenderArea = React.createClass({
	renderContainerStyle: {
		border: '1px solid black',
		display: 'flex',
		order: '2',
		flex: '1',
		flexFlow: 'row',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignSelf: 'stretch',
		overflow: 'auto',
		height: '100%'

	},
	renderAreaStyle: {
		border: '2px solid red',
		order: '3',
		flex: '1',
		alignSelf: 'stretch',
		minWidth: '0px'
	},
	/**
	 * Example of rendering conditional html based on props.target from parent
	 */
	propTypes: {
		target: React.PropTypes.string,
		dispatch: React.PropTypes.func
	},
	renderSignInPage(target, dispatch) {
		return (
			<div id='content' style={this.renderContainerStyle}>
				<div style={this.renderAreaStyle}>
					<h2>HomePage: {target}</h2>
				</div>
				<RightBar target={target} dispatch={dispatch}/>
			</div>
		);
	},
	renderHomePage(target, dispatch) {
		return (
			<div id='content' style={this.renderContainerStyle}>
				<div style={this.renderAreaStyle}>
					<h2>HomePage: {target}</h2>
				</div>
				<RightBar target={target} dispatch={dispatch}/>
			</div>
		);
	},
	renderUndefined(target, dispatch) {
		return (
			<div id='content' style={this.renderContainerStyle}>
				<h2>UndefinedPage: {target}</h2>
			</div>
		);
	},
	render() {
		let target = this.props.target;
		let dispatch = this.props.dispatch;
		console.log('RenderArea: ENTRY, target: ' + target);
		switch (target) {
		case constants.HomePage:
			return this.renderHomePage(target, dispatch);
			break;
		case constants.SignInPage:
			return this.renderSignInPage(target, dispatch);
			break;
		default:
			return this.renderUndefined(target, dispatch);
			break;
		}
	}
});

