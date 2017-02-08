var redux = require('redux');
import {routerReducer } from 'react-router-redux';

// config the redux store to hold state
export var configure = (state = {}) => {
	var reducer = redux.combineReducers({
		routing: routerReducer, // routing reducer to keep track of the state while navigating
		// custom made reducers goes here for combining
	});

	var store = redux.createStore(reducer, state, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};