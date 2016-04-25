import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import { Index, Sample, SampleX } from '../../ui/components/index.jsx';
import { Hello } from '../../ui/components/hello.jsx';
import * as constants from '../../../common/constants.js';

const initialState = {target: constants.HomePage};

export const targetReducer = (state, action) => {
    state = state || initialState;
    if (action) {
        switch (action.type) {
            case 'TOGGLE':
                return {
                    target: constants.SignInPage
                };
            default:
                return state;
        }
    }
};


export const store = createStore(combineReducers({targetReducer}));

Meteor.startup(() => {
    render(
        // This is how we hookup redux and react-router.  <Provider> wraps <Router>
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
const mapStateToProps = (state) => {
    return {
        target: state.targetReducer.target
    }
};

export const ActiveTarget = connect(mapStateToProps)(SampleX);
