// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');

// redux store
var store = require('store').configure({});

// page components
var Main = require('Main');

// render application with react Router
ReactDOM.render(
  	<Provider store={store}>
		<Main/>
  	</Provider>,
  	document.getElementById('app')
);
