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
    /**
     * Example of rendering conditional html based on props.target from parent
     */
    propTypes: {
        target: React.PropTypes.string
    },
    renderSignInPage(target) {
        return (
        <div id='content' className='renderContainer'>
            <div className="renderArea">
                <h2>HomePage: {target}</h2>
            </div>
            <RightBar target={target}/>
        </div>
        );
    },
    renderHomePage(target) {
        return (
            <div id='content' className='renderContainer'>
                <div className="renderArea">
                    <h2>HomePage: {target}</h2>
                </div>
                <RightBar target={target}/>
            </div>
        );
    },
    renderUndefined(target) {
        return (
            <div id='content' className='renderContainer'>
                <h2>UndefinedPage: {target}</h2>
            </div>
        );
    },
    render() {
        let target = this.props.target;
        console.log('RenderArea: ENTRY, target: ' + target);
        switch (target) {
            case constants.HomePage:
                return this.renderHomePage(target);
                break;
            case constants.SignInPage:
                return this.renderSignInPage(target);
                break;
            default:
                return this.renderUndefined(target);
                break;
        }
    }
});

