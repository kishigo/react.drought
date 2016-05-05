import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import { Index, Sample, AppFrame } from '../../ui/components/index.jsx';
import { Hello } from '../../ui/components/hello.jsx';
import * as constants from '../../../common/constants.js';

const initialState = {target: constants.HomePage};

/**
 * Trivial reducer, toggles state.target between HomePage and SignInPage
 * @param state - 
 * @param action - only ActionToggle supported for this trivial reduction
 * @returns {*} - new state
 */
export const targetReducer = (state, action) => {
    state = state || initialState;
    if (action) {
        switch (action.type) {
            case constants.ActionToggle:
                return (state.target === constants.HomePage) ? {
                    target: constants.SignInPage
                } : {
                    target: constants.HomePage
                };
            default:
                return state;
        }
    }
};

const store = createStore(combineReducers({targetReducer}));
/**
 * Hookup redux and react-router
 */
Meteor.startup(() => {
    render(
        // This is how we hookup redux and react-router.  <Provider> wraps <Router>
        // store={store}??? What does this do ??? I think it injects store into reducers and maps
        <Provider store={store}>
            <Router history={ browserHistory }>
                <Route path="/" component={ ActiveTarget }/>
                <Route path="/hello" component={ Hello }/>
                <Route path="/index" component={ Index }/>
            </Router>
        </Provider>,
        document.getElementById('react-root')
    );
});


// Let's try to connect
/**
 * Trivial mapping for connect()
 * @param state - mandatory input
 * @returns {{target: *}}
 */
const mapStateToProps = (state) => {
    return {
        target: state.targetReducer.target
    }
};

export const ActiveTarget = connect(mapStateToProps)(AppFrame);
